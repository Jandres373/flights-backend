import nodemailer from 'nodemailer';

const sendEmail = (options:any) => new Promise((resolve, reject) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    })
    const mailOptions = {
        from: process.env.EMAIL,
        ...options
    }
    transporter.sendMail(mailOptions, (error:any, info:any) => {
        console.log(error, info)
        if (error) {
            console.log(error);
            return reject({ message: "An error has occured" })
        }
        return resolve({ message: "Email sent successfully" })
    })
})

export default sendEmail;