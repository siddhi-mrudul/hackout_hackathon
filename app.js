const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
function sendOtp(receiver) {
    const otp= Math.floor(Math.random()*1000000);
    
const msg = {
    to: `${receiver}`,
    from: 'mrudulkolambe02@gmail.com',
    subject: 'OTP Verification',
    text: `The Otp is ${otp}`,
    html: `<strong>The Otp is ${otp} and easy to do anywhere, even with Node.js</strong>`,
};
sgMail.send(msg)
    .then(function () {
        console.log("Mail Sent");
    })
    .catch(function (error) {
        console.log(error.message);
    })
}
module.exports = sendOtp;