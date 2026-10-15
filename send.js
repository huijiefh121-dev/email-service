import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendNotification(toEmail, subject, content) {
  try {
    const data = await resend.emails.send({
      from: 'noreply@72kbqp.bond',
      to: [toEmail],
      subject: subject,
      html: `<p>${content}</p>`,
    });
    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}
