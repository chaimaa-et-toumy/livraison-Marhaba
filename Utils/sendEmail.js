const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'chaimaaet2001@gmail.com',
        pass: 'rfiyjbohacwqshwz'
    }
   });

const sendEmail = (req,user,res) => {
        const mailOptions = {
            from: ' "Verify your email" chaimaaet2001@gmail.com', 
            to: user.email,
            subject: 'Verify your email', 
            html: `<h2> ${user.name}! thanks for registering on our site</h2>
                <h4> please verify your mail to continue ... </h4>
                <a href="http://${req.headers.host}/api/auth/verify_email/${user.eToken}" >Verify your Email</a>`
        };
    
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
                console.log(err)
            else
                console.log("verification email is sent to your gmail account");
        })
};

module.exports = {sendEmail}
   