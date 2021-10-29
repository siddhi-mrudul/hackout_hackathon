var nodemailer = require('nodemailer');
function send(sender, password, receiver) {
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

module.exports = send;