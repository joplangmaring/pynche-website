import nodemailer from 'nodemailer';
// const nodemailer = require('nodemailer');
// const hbs = require('nodemailer-express-handlebars');
// import hbs from 'nodemailer-express-handlebars';
// const path = require('path');

// import path from 'path';
// import dotenv from 'dotenv';


export const sendNewsletterEmail = async (email) => {

  const to = 'gauravgames26@gmail.com'
  const subject = "New Update from PynChe website"

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    const htmlContent = `A new submission has been received - ${email}`

    // Set email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: htmlContent,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};


// dotenv.config();
// require('dotenv').config();

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });


// const handlebarOptions = {
//   viewEngine: {
//     partialsDir: path.resolve('./views/'),
//     defaultLayout: false,
//   },
//   viewPath: path.resolve('./views/'),
//   extName: '.handlebars',
// };

// transporter.use('compile', hbs(handlebarOptions));

export const sendEmail = async (emailHtml) => {

  const to = 'gauravgames26@gmail.com'
  const subject = "New Update from PynChe website"

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Set email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: emailHtml,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}


