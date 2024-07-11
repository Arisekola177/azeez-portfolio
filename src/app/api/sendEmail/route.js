// app/api/sendEmail/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { username, phoneNumber, email, subject, message } = await request.json();

  console.log("Received request:", { username, phoneNumber, email, subject, message });

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO, // Your email address
    subject: `New Message from ${username}: ${subject}`,
    text: `Name: ${username}\nPhone: ${phoneNumber}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
