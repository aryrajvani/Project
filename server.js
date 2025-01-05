const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

// Initialize Express app
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Twilio credentials (Replace with your actual values)
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const twilioPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER';

// Initialize Twilio client
const client = twilio(accountSid, authToken);

// Store OTP temporarily (for demo purposes)
let otpCache = {};

// Endpoint to send OTP to the user's phone number
app.post('/send-otp', (req, res) => {
  const { phoneNumber } = req.body;
  
  if (!phoneNumber) {
    return res.status(400).send({ error: 'Phone number is required' });
  }

  // Generate a random OTP (6-digit)
  const otp = Math.floor(100000 + Math.random() * 900000);
  
  // Store OTP temporarily (you can store this in a database in a real-world scenario)
  otpCache[phoneNumber] = otp;

  // Send OTP via SMS using Twilio
  client.messages.create({
    body: `Your OTP code is: ${otp}`,
    from: twilioPhoneNumber,
    to: phoneNumber
  })
  .then(() => {
    res.send({ message: 'OTP sent successfully!' });
  })
  .catch(err => {
    res.status(500).send({ error: 'Failed to send OTP', details: err.message });
  });
});

// Endpoint to verify OTP
app.post('/verify-otp', (req, res) => {
  const { phoneNumber, otp } = req.body;
  
  if (!phoneNumber || !otp) {
    return res.status(400).send({ error: 'Phone number and OTP are required' });
  }

  // Check if the OTP matches the one sent
  if (otpCache[phoneNumber] && otpCache[phoneNumber] === otp) {
    delete otpCache[phoneNumber]; // Clear OTP after successful verification
    res.send({ message: 'OTP verified successfully!' });
  } else {
    res.status(400).send({ error: 'Invalid OTP' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
