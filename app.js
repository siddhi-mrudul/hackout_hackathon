var nodemailer = require('nodemailer');

function send(sender, password, receiver) {
    const otp=Math.floor(Math.random()*1000000);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${sender}`,
            pass: `${password}`
        }
    });

    var mailOptions = {
        from: `${sender}`,
        to: `${receiver}`,
        subject: 'OTP Verification',
        text: ` Your otp is ${otp}.`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = send;