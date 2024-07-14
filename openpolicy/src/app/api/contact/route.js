import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, subject, body } = await req.json();

    const transporter = nodemailer.createTransport({
      // Configure your email provider (e.g., SendGrid, Mailgun)
      // Example for SendGrid:
      // service: 'SendGrid',
      // auth: {
      //   user: process.env.SENDGRID_USER,
      //   pass: process.env.SENDGRID_PASSWORD,
      // },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL, // Replace with your email address
      to: process.env.CONTACT_EMAIL, // Replace with your email address
      subject: `[OpenPolicy Contact Form] ${subject}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message:</p>
        <p>${body}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
