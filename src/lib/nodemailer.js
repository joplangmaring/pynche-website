// import nodemailer from 'nodemailer';

// export const sendEmail = async (email) => {

//     const to = 'pynche1909@gmail.com'
//     const subject = "New Update from PynChe website"

//     try {
//         // Create a transporter
//         const transporter = nodemailer.createTransport({
//             service: 'Gmail', // Use your email service
//             auth: {
//                 user: 'amaringjoplang@gmail.com', // Your email address
//                 pass: 'fslwdnveoffrheic', // Your email password
//             },
//         });

//         // let attachments = null;

//         // if(ticketId){
//         //     attachments = [
//         //         {
//         //             filename: `ticket_${ticketId}.pdf`,
//         //             content: pdfBuffer,
//         //             contentType: 'application/pdf',
//         //         },
//         //     ]
//         // }

//         // if(!htmlContent){
//         //     htmlContent = "A new submission has been received"
//         // }

//         const htmlContent = `A new submission has been received - ${to}`

//         // Set email options
//         const mailOptions = {
//             from: 'amaringjoplang@gmail.com',
//             to: 'gauravcodes123@gmail.com',
//             subject,
//             html: htmlContent,
//         };

//         // Send email
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email sent: ' + info.response);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// };

const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});


const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve('./views/'), 
    defaultLayout: false, 
  },
  viewPath: path.resolve('./views/'), 
  extName: '.handlebars', 
};

transporter.use('compile', hbs(handlebarOptions));

async function sendEmail(context) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVE,
    subject: 'New update from PynChe website',
    template: 'contact', 
    context: context,
  };

  return transporter.sendMail(mailOptions);
}
module.exports = { sendEmail };


