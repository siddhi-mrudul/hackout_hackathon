## Features

- Easy to use.
- Less lines of code.
- Generates , sends(email) and verifies otp.


## Prerequisites
Inorder to send email , you will be requiring a password which 
is easy to generate.
Following are the steps to generate this password: 
1. Go to your Google account.  (Use the account from which you have to send email).
2. Go to security.
3. Under security, there is an option called "app passwords".
4. In app password, generate a password and copy it.


## Installation 
``` npm
npm install otp-mailer-verifier 
```

## Usage 
1. **Require the package.**
``` javascript 
const otpMailer = require('otp-mailer-verifier');
```
With this package, you can easily generate 6 digit otp, send otp on mails and verifies otp entered by user.

2. **Generating and sending a otp on email.**
```javascript 
otpMailer.send(senderMail,password,receiverMail);
// here password is the app password that is generated using Google account 
```

For eg: 
``` javascript 
otpMailer.send("siddhibhanushali@gmail.com","aadfffgghh","mrudulkolambe@gmail.com");
```

3. **Verifying the otp.**
``` javascript 
otpMailer.verify(userEnteredOtp);
// here userEnteredOtp is the otp which can be taken as input from the user
``` 
For eg:
```javascript
otpMailer.verify(123456);
```






