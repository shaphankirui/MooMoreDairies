// pages/api/send-email.js
import { sendMail } from '@/src/mailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;

    try {
      const result = await sendMail(formData);
      res.status(200).json({ success: true, result });
    } catch (error) {
      console.error('Error sending email request:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
