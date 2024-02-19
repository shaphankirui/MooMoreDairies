// pages/api/submit-reservation.js
import { submitReservation } from '@/src/reservation-handler';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;

    try {
      // Call a function to handle reservation submission (implement this in reservation-handler.js)
      const result = await submitReservation(formData);
      res.status(200).json({ success: true, result });
    } catch (error) {
      console.error('Error submitting reservation:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
