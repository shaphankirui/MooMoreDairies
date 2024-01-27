import { sendMail } from '../../src/mailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Extract form data from the request body
      const { name, email, tel, subject, message } = req.body;

      // Use the sendMail function to send the email
      await sendMail({
        to: 'mooandmoredairyfarmlimited@gmail.com', // replace with your recipient email address
        from: email,
        subject: subject,
        text: message,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
