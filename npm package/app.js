var nodemailer = require('nodemailer');
// const otp = Math.floor(Math.random()*1000000);
const otp=123456;


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
        subject: 'OTP Verification',
        text: ` Your otp is ${otp}.`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
function verify(userOtp){
    if(userOtp==otp){
        console.log(otp);
    }
    else{
        console.log("Not Matched");
    }

}

module.exports = {send,verify};