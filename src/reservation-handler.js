// src/reservation-handler.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service provider
  auth: {
    user: 'mooandmoredairyfarmlimited@gmail.com', // Your email address
    pass: 'suam pnpi nlrh sxty', // Your email password or app-specific password
  },
});

export const submitReservation = async (formData) => {
  try {
    const mailOptions = {
      from: 'mooandmoredairyfarmlimited@gmail.com', // Sender email address
      to: 'mooandmoredairyfarmlimited@gmail.com', // Receiver email address
      subject: 'New Reservation',
      html: `
        <p>Name: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
        <p>Phone Number: ${formData.tel}</p>
        <p>Number of Persons: ${formData.persons}</p>
        <p>Date: ${formData.date}</p>
        <p>Time: ${formData.time}</p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Reservation submitted successfully:', result);
    return { success: true, message: 'Reservation submitted successfully' };
  } catch (error) {
    console.error('Error submitting reservation:', error);
    return { success: false, message: 'Error submitting reservation' };
  }
};
