import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, subject, body } = await req.json();

    const transporter = nodemailer.createTransport({
      // Configure your email provider (e.g., SendGrid, Mailgun, etc.)
      // Example for SendGrid:
      // service: 'sendgrid',
      // auth: {
      //   user: process.env.SENDGRID_USER,
      //   pass: process.env.SENDGRID_PASSWORD,
      // },
    });

    await transporter.sendMail({
      from: email, // Replace with your sender email
      to: process.env.CONTACT_EMAIL,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${body}`,
    });

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending message.' }, { status: 500 });
  }
}
