import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, subject, body } = await req.json();

    // Create a transporter using your email provider's credentials
    const transporter = nodemailer.createTransport({
      // Configure your email provider (e.g., Gmail, SendGrid)
      service: 'gmail', // Example: 'gmail'
      auth: {
        user: process.env.CONTACT_EMAIL, // Your email address
        pass: process.env.CONTACT_PASSWORD, // Your email password or app password
      },
    });

    // Create the email message
    const mailOptions = {
      from: process.env.CONTACT_EMAIL, // Sender address
      to: process.env.CONTACT_EMAIL, // Recipient address (can be the same as sender)
      subject: subject,
      text: `Name: ${name}
Email: ${email}

${body}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
