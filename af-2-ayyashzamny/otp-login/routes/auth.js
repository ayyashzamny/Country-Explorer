const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const sendOTP = require('../email');
const crypto = require('crypto');
const router = express.Router();

const OTP_EXPIRY_TIME = 5 * 60 * 1000; // 5 minutes

// Route to send OTP to email
router.post('/send-otp', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Generate OTP
  const otp = crypto.randomInt(100000, 999999).toString();  // Generate a 6-digit OTP

  // Check if user exists in database
  let user = await User.findOne({ email });

  if (!user) {
    // If user doesn't exist, create a new user
    user = new User({ email });
  }

  // Save OTP and its expiry time
  user.otp = otp;
  user.otpExpiry = new Date(Date.now() + OTP_EXPIRY_TIME);
  await user.save();

  // Send OTP email
  try {
    await sendOTP(email, otp);
    res.status(200).json({ message: 'OTP sent to email' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending OTP' });
  }
});

// Route to verify OTP and login user
router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: 'Email and OTP are required' });
  }

  // Check if user exists and OTP is valid
  const user = await User.findOne({ email, otp });

  if (!user || new Date() > user.otpExpiry) {
    return res.status(400).json({ message: 'Invalid OTP or OTP expired' });
  }

  // OTP is valid, proceed with login (create JWT or session)
  // For simplicity, we just return a success message here
  res.status(200).json({ message: 'Login successful' });
});

module.exports = router;
