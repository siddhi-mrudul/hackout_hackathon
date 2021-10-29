const sgMail = require('@sendgrid/mail');

sgMail.setApiKey("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");
function sendOtp(receiver) {
    
const msg = {
    to: `${receiver}`,
    from: `${process.env.EMAIL}`,
    subject: 'Sending with Twilio SendGrid is Fun',
    text: `The Otp is`,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg)
    .then(function () {
        console.log("Mail Sent");
    })
    .catch(function (error) {
        console.log(error.message);
    })
}
module.exports = send;