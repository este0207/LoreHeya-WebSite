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

    const DEFAULT_TO = 'loreia.bionature@yahoo.fr';
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const smtpTo = process.env.SMTP_TO || DEFAULT_TO;
    const smtpSecure = getBoolean(process.env.SMTP_SECURE) || smtpPort === 465;

    // Nodemailer only. If SMTP not configured, use Ethereal test account in dev; error in prod
    let usingTestAccount = false;
    let transporter: nodemailer.Transporter;
    if (!smtpHost || !smtpUser || !smtpPass) {
      if (process.env.NODE_ENV === 'development') {
        usingTestAccount = true;
        const testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false,
          auth: { user: testAccount.user, pass: testAccount.pass },
        });
      } else {
        return Response.json({
          error: 'SMTP non configuré en production',
          details: 'Définissez SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM.',
          transport: 'smtp'
        }, { status: 500 });
      }
    } else {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpUser, pass: smtpPass },
      });
    }

    // Vérifie la configuration SMTP avant l'envoi
    try {
      await transporter.verify();
    } catch (verifyError: any) {
      return Response.json({
        error: 'SMTP vérification échouée',
        details: verifyError?.message || 'Impossible de se connecter au serveur SMTP',
        transport: 'smtp'
      }, { status: 500 });
    }

    const mailSubject = subject && String(subject).trim().length > 0
      ? `[Contact] ${subject}`
      : '[Contact] Nouveau message du site';

    const text = `Nom: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`;

    // Envoi via Nodemailer/SMTP uniquement
    const allowUserFrom = getBoolean(process.env.SMTP_ALLOW_FROM_USER);
    const mailFrom = allowUserFrom && email ? email : (smtpFrom || 'no-reply@example.com');

    const info = await transporter.sendMail({
      from: mailFrom,
      to: smtpTo,
      replyTo: email,
      subject: mailSubject,
      text,
      html: `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#111;">
        <h2 style="margin:0 0 12px;">Nouveau message du formulaire de contact</h2>
        <p style="margin:0 0 8px;"><strong>Nom:</strong> ${fullName}</p>
        <p style="margin:0 0 8px;"><strong>Email:</strong> ${email}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:12px 0;" />
        <p style="white-space:pre-wrap;margin:0;">${message}</p>
      </div>`,
    });
    const previewUrl = usingTestAccount ? nodemailer.getTestMessageUrl(info) : undefined;
    return Response.json({
      ok: true,
      id: info.messageId,
      previewUrl,
      transport: usingTestAccount ? 'ethereal' : 'smtp',
      mailFrom,
      mailTo: smtpTo,
      accepted: info.accepted,
      rejected: info.rejected,
      envelope: info.envelope,
      response: info.response,
    });
  } catch (error: any) {
    return Response.json({
      error: 'Erreur serveur.',
      details: error?.message || 'Erreur inconnue',
      transport: 'smtp'
    }, { status: 500 });
  }
}
