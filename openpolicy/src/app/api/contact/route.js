import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, subject, body } = await req.json();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL,
    subject: `[Open Policy] ${subject}`,
    text: `\nName: ${name}\nEmail: ${email}\n\n${body}`,
    html: `
      <div>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <br />
        <p>${body}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailData);
    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
