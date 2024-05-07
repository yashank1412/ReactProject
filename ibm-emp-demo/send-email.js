import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'Gmail',
    auth: {
        user: 'ishwar.wani303@gmail.com',
        pass: ''
    }

});

// const sendEmail = () => {

//     const mailOptions = {
//         from: 'ishwar.wani303@gmail.com',
//         to: 'siddharthbhamare@gmail.com',
//         subject: 'Testing',
//         text: 'Tested'
//     };

//     transporter.sendMail(mailOptions);

// };

// export { sendEmail };


// code with dynamic values and proper response   
const sendEmail = (to,subject,text) => {

    const mailOptions={
        from:'ishwar.wani303@gmail.com',
        to:to,
        subject:subject,
        text:text
    };
    transporter.sendMail(mailOptions);
};
export { sendEmail };