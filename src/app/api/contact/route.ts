import nodemailer from 'nodemailer';

function getBoolean(value: string | undefined) {
  if (!value) return false;
  return ['1', 'true', 'yes', 'on'].includes(value.toLowerCase());
}

export async function POST(request: Request) {
  try {
    const { fullName, email, subject, message } = await request.json();

    if (!fullName || !email || !message) {
      return Response.json({ error: 'Champs manquants.' }, { status: 400 });
    }

    const DEFAULT_TO = 'esteban.h0207@gmail.com';
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const smtpTo = process.env.SMTP_TO || DEFAULT_TO;
    const smtpSecure = getBoolean(process.env.SMTP_SECURE) || smtpPort === 465;

    // Nodemailer only. If SMTP not configured, use Ethereal test account (dev only)
    let usingTestAccount = false;
    let transporter: nodemailer.Transporter;
    if (!smtpHost || !smtpUser || !smtpPass) {
      usingTestAccount = true;
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });
    } else {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpUser, pass: smtpPass },
      });
    }

    const mailSubject = subject && String(subject).trim().length > 0
      ? `[Contact] ${subject}`
      : '[Contact] Nouveau message du site';

    const text = `Nom: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`;

    // Prefer Brevo if API key provided
    const brevoApiKey = process.env.BREVO_API_KEY;
    const useBrevo = Boolean(brevoApiKey && brevoApiKey.trim().length > 0);

    if (useBrevo) {
      const senderEmail = smtpFrom || 'no-reply@loreheya.fr';
      const payload = {
        sender: { email: senderEmail, name: 'Site Lore Heya' },
        to: [{ email: smtpTo }],
        replyTo: { email },
        subject: mailSubject,
        textContent: text,
      };
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': brevoApiKey as string,
        },
        body: JSON.stringify(payload),
        cache: 'no-store',
      });
      if (!res.ok) {
        const errText = await res.text();
        return Response.json({ error: 'Brevo error', details: errText }, { status: 502 });
      }
      const result = await res.json();
      return Response.json({ ok: true, id: result?.messageId || 'brevo' });
    } else {
      // Compose email via Nodemailer
      const allowUserFrom = getBoolean(process.env.SMTP_ALLOW_FROM_USER);
      const mailFrom = allowUserFrom && email ? email : (smtpFrom || 'no-reply@example.com');

      const info = await transporter.sendMail({
        from: mailFrom,
        to: smtpTo,
        replyTo: email,
        subject: mailSubject,
        text,
      });
      const previewUrl = usingTestAccount ? nodemailer.getTestMessageUrl(info) : undefined;
      return Response.json({ ok: true, id: info.messageId, previewUrl });
    }
  } catch (error) {
    return Response.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
