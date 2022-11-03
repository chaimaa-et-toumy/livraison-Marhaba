const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'chaimaaet2001@gmail.com',
        pass: 'rfiyjbohacwqshwz'
    }
});

// for verified email

const sendEmail = async (req,user,res) => {
        const mailOptions = {
            from: ' "Verify your email" chaimaaet2001@gmail.com', 
            to: user.email,
            subject: 'Verify your email', 
            html: `<h2> ${user.name}! thanks for registering on our site</h2>
                <h4> please verify your mail to continue ... </h4>
                <a href="http://${req.headers.host}/api/auth/verify_email/${user.eToken}" >Verify your Email</a>`
        };

        try {
            await transporter.sendMail(mailOptions)
            res.err = 'verification email is sent to your gmail account'
        } catch (error) {
            res.err = error.message || 'error'
        }        
};
 
// for forget password

const forgetPassword = (req,user,res) => {
    const mailOptions = {
        from: ' "Verify your email" chaimaaet2001@gmail.com', 
        to: user.email,
        subject: 'Account Activation link', 
        html: `<h4> please click on given link to reset your password </h4>
            <a href="http://${req.headers.host}/api/auth/forgetPassword/${user.etoken}" >click to reset password</a>`
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log("the link to reset password  is sent to your gmail account");
    })
};

module.exports = {sendEmail,forgetPassword}
   