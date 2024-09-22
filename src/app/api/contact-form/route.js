import { sendEmail } from '@/lib/nodemailer';
import contact from '@/views/contact.hbs'; // Import the precompiled template

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'All fields are required' }),
        { status: 400 }
      );
    }


    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email format' }),
        { status: 400 }
      );
    }

    const context = { name, email, message };

    const emailHtml = contact({
      name: name,
      email: email,
      message: message
    })


    await sendEmail(emailHtml);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Server Error' }),
      { status: 500 }
    );
  }
}
