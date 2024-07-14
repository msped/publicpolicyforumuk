import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, subject, body } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${body}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
