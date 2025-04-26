// app/api/send-email/route.js
import { visaData } from '../../lib/visaData';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { visaType, email } = await request.json();

    if (!visaType || !visaData[visaType]) {
      return new Response(JSON.stringify({ error: 'Invalid visa type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Set up Nodemailer transporter (configure with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your email provider
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email content
    const documentList = visaData[visaType].join('\n');
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Document Checklist for ${visaType}`,
      text: `Here is the list of required documents for ${visaType}:\n\n${documentList}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}