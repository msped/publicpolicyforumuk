import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, subject, body } = await req.json();

  const transporter = nodemailer.createTransport({
    // Configure your email provider
    // For example, for Gmail:
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL, // Replace with your Gmail email
      pass: process.env.CONTACT_PASSWORD, // Replace with your Gmail password
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL, // Replace with your Gmail email
      to: process.env.CONTACT_EMAIL, // Replace with the recipient email address
      subject: `New message from ${name} - ${subject}`,
      html: `
        <p>From: ${name} (${email})</p>
        <p>Subject: ${subject}</p>
        <p>${body}</p>
      `,
    });

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending message' }, { status: 500 });
  }
}
