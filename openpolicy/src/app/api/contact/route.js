import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      // Configure your email provider
      // For example, for Gmail:
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_EMAIL, // Your Gmail email address
        pass: process.env.CONTACT_PASSWORD, // Your Gmail password or app password
      },
    });

    const mailOptions = {
      from: process.env.CONTACT_EMAIL, // Your Gmail email address
      to: process.env.CONTACT_EMAIL, // The email address to receive the contact form submissions
      subject: `New message from ${name} - ${subject}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
