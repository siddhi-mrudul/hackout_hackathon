var nodemailer = require('nodemailer');
function send() {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mrudulkolambe02@gmail.com',
            pass: 'jcucyvvvsveqpnes'
        }
    });

    var mailOptions = {
        from: 'mrudulkolambe02@gmail.com',
        to: 'mrudulkolambe@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'Thatkhbcjbadsk,bxckjadbscx easy!'
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