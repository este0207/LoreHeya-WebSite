import nodemailer from 'nodemailer';

const MAX_NAME = 120;
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]!);
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== 'object') {
      return Response.json({ error: 'Données invalides.' }, { status: 400 });
    }

    const input = body as Record<string, unknown>;
    const fullName = typeof input.fullName === 'string' ? input.fullName.trim() : '';
    const email = typeof input.email === 'string' ? input.email.trim() : '';
    const subject = typeof input.subject === 'string' ? input.subject.trim() : '';
    const message = typeof input.message === 'string' ? input.message.trim() : '';

    if (!fullName || !email || !message) {
      return Response.json({ error: 'Merci de remplir les champs obligatoires.' }, { status: 400 });
    }
    if (fullName.length > MAX_NAME || subject.length > MAX_SUBJECT || message.length > MAX_MESSAGE) {
      return Response.json({ error: 'Un ou plusieurs champs sont trop longs.' }, { status: 400 });
    }
    if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
      return Response.json({ error: 'Adresse email invalide.' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const smtpTo = process.env.SMTP_TO || 'loreia.bionature@yahoo.fr';

    let transporter: nodemailer.Transporter;
    let mailFrom = smtpFrom;
    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      if (process.env.NODE_ENV === 'development') {
        const testAccount = await nodemailer.createTestAccount();
        mailFrom = testAccount.user;
        transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email', port: 587, secure: false,
          auth: { user: testAccount.user, pass: testAccount.pass },
        });
      } else {
        console.error('Contact email unavailable: SMTP configuration is incomplete.');
        return Response.json({ error: 'Le service de contact est momentanément indisponible.' }, { status: 503 });
      }
    } else {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: process.env.SMTP_SECURE?.trim().toLowerCase() === 'true' || smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });
    }

    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);
    await transporter.sendMail({
      from: mailFrom,
      to: smtpTo,
      replyTo: email,
      subject: subject ? `[Contact] ${subject.replace(/[\r\n]/g, ' ')}` : '[Contact] Nouveau message du site',
      text: `Nom: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#111;">
        <h2 style="margin:0 0 12px;">Nouveau message du formulaire de contact</h2>
        <p style="margin:0 0 8px;"><strong>Nom :</strong> ${safeName}</p>
        <p style="margin:0 0 8px;"><strong>Email :</strong> ${safeEmail}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:12px 0;" />
        <p style="white-space:pre-wrap;margin:0;">${safeMessage}</p>
      </div>`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact email send failed:', error);
    return Response.json({ error: 'Envoi impossible pour le moment. Réessayez plus tard.' }, { status: 500 });
  }
}
