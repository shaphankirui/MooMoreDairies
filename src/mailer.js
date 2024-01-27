import emailjs from 'emailjs-com';

const sendMail = async (mailOptions) => {
  return emailjs.send('gmail', 'template_id', mailOptions, 'user_id');
};

export default { sendMail };
