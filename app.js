var nodemailer = require('nodemailer');
function send() {
    const otp=Math.floor(Math.random()*1000000);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mrudulkolambe02@gmail.com',
            pass: 'jcucyvvvsveqpnes'
        }
    });

    var mailOptions = {
        from: 'mrudulkolambe02@gmail.com',
        to: 'siddhibhanushali1234@gmail.com',
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
send();