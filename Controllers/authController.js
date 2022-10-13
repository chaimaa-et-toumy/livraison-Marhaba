// method : post
// url : api/auth/login
// acces : Public
const Login =  (req,res) => {
    res.status(200).send('this a login function')
}

// method : post
// url : api/auth/register
// acces : Public

const Register =  (req,res) => {
    res.status(200).send('this a register function')
}

// method : post
// url : api/auth/Forgetpassword
// acces : Public

const ForgetPassword =  (req,res) => {
    res.status(200).send('this a Forget Password function')
}

// method : post
// url : api/auth/resetpassword
// acces : Public

const ResetPassword =  (req,res) => {
    res.status(200).send('this a reset Password function')
}

module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword
}