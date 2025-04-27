const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter for sending emails (using Gmail as an example)
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to any email service like SendGrid if you prefer
  auth: {
    user: process.env.EMAIL_USER,   // Your email
    pass: process.env.EMAIL_PASS    // Your email password (or app password if 2FA enabled)
  }
});

// Function to send OTP
function sendOTP(email, otp) {
  const mailOptions = {
    from: process.env.EMAIL_USER,  // Sender's email
    to: email,                    // Recipient's email
    subject: 'Your OTP for Login', // Subject of the email
    text: `Your OTP is ${otp}`     // Email body
  };

  return transporter.sendMail(mailOptions);
}

module.exports = sendOTP;
