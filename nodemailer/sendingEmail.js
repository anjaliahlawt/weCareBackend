
const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (data) => {
    console.log("Hello Node mailer")
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, // Use SSL
        secure: true, // Use SSL
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    transporter.verify((error, success) => {
        if (error) {
            console.error("Error verifying transporter:", error);
        } else {
            console.log("Transporter verified:", success);
        }
    });

    transporter.sendMail({
        to: data.email,
        from: process.env.EMAIL_USER,
        subject: data.subject,
        html: data.body,
    })
    .then(() => console.log('Mail sent successfully'))
    .catch((err) => console.error("Error sending mail:", err));
};

module.exports = { sendEmail };
