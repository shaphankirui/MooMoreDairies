// src/mailer.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service provider
  auth: {
    user: 'mooandmoredairyfarmlimited@gmail.com', // Your email address
    pass: 'suam pnpi nlrh sxty', // Your email password or app-specific password
  },
});

const sendMail = async (formData) => {
  try {
    const mailOptions = {
      from: 'mooandmoredairyfarmlimited@gmail.com', // Sender email address
      to: 'mooandmoredairyfarmlimited@gmail.com', // Receiver email address
      subject: formData.subject,
      html: `
        <p>Name: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
        <p>Phone Number: ${formData.tel}</p>
        <p>Message: ${formData.message}</p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = { sendMail };
