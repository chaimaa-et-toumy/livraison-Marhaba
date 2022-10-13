// method : post
// url : api/auth/login
// acces : Public
const Login = async(req,res) => {
    if(!req.body.username || !req.body.password){
        res.status(400)
        throw new Error("please enter a username and password")
    }
    res.status(200).send('this a login function')
    
}

// method : post
// url : api/auth/register
// acces : Public

const Register = async(req,res) => {
    res.status(200).send('this a register function')
}

// method : post
// url : api/auth/Forgetpassword
// acces : Public

const ForgetPassword = async(req,res) => {
    res.status(200).send('this a Forget Password function')
}

// method : post
// url : api/auth/resetpassword
// acces : Public

const ResetPassword = async(req,res) => {
    res.status(200).send('this a reset Password function')
}

module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword
}