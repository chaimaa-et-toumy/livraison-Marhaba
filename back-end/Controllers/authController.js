const user = require('../Models/userModel')
const Role = require('../Models/roleUserModel')
const bycrpt = require('bcryptjs')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
let ls = require('local-storage');
const {sendEmail,forgetPassword} = require('../Utils/sendEmail')
const { decode } = require('punycode')

// method : post
// url : api/auth/login
// acces : Public
const Login = async(req,res) => {
    const {email,password} = req.body

    if(!email || !password){
         res.status(400).send("please enter a username and password")
        
    }

    // check user email
    try {
    const user_ = await user.findOne({email}).populate("role")


    if(user_ && (await bycrpt.compare(password,user_.password)) && user_.isVerifed === true){
        let token = generateToken(user_._id,user_.email,user_.name)
        ls('token', token)
        res.status(200).json({
            _id : user_._id,
            name : user_.name,
            email : user_.email,
            role : user_.role.role,
            token : token,
        })
    }else if(user_ && (await bycrpt.compare(password,user_.password)) && user_.isVerifed !== true){
         res.status(401).send('first verify your email address to login')
        
    }
    else if(user_ && (await bycrpt.compare(password,user_.password) !== true)){
          res.status(400).send('incorrect password')
        
    }
    else{
         res.status(404).send('user not exist')
        
    } 
}
catch(error){
    console.log(error)
}

}

// method : post
// url : api/auth/register
// acces : Public

const Register = async(req,res) => {
    const {name , email , password , role} = req.body

    // if empty
    if(!name || !email || !password || !role){
        res.status(400).send("Please add All fields")
        return
    }

    // check if user exist
    const userExist = await user.findOne({email})
    if(userExist){
         res.status(400).send("User already exist")
         return
    }


    //role
    const roles = await Role.findOne({role})
    
    if(!roles){
        res.status(404).send("role is required")
        return
    }

    // hash password
    const salt = await bycrpt.genSalt(10)
    const haschedPassword = await bycrpt.hash(password,salt)

    
    // create user
    try {
        
    
    const user_ = await user.create({
        name,
        email,
        password : haschedPassword,
        eToken : crypto.randomBytes(64).toString('hex'),
        isVerifed : false,
        role : roles._id
    })

    await sendEmail(req,user_,res)

    // console.log(res.err);
    
    if(user_){
        res.status(201).json({
            _id : user_.id,
            name : user_.name,
            email : user_.email,
            password : user_.password,
            token : generateToken(user_.id),
            eToken : user_.eToken,
            isVerifed : user_.isVerifed,
            role,
            msg : res.message
        })
    }
} catch (error) {
        console.log(error)
}

    
}

// method : post
// url : api/auth/forgetpassword
// acces : Public

const ForgetPassword = async(req,res) => {
    const email = req.body.email
    if(!email){
        res.send("email is required")
    }
    const user_ = await user.findOne({email})


    if(user_){
        await forgetPassword(req,user_,res)
        res.status(201).json({
        _id : user_.id,
        email : user_.email,
        etoken : jwt.sign({_id : user_.id}, process.env.JWT_SECRET , {expiresIn : '10m'}),
        msg : res.err
    })     
   
    }
    else{
        res.status(404).send("user not found")
    }
}

// method : post
// url : api/auth/resetpassword
// acces : Public

const ResetPassword = async(req,res) => {
    const password = req.body.password
    let token = req.params.token

     // hash password
     const salt = await bycrpt.genSalt(10)

    if(!password){
        res.status(400).send("password is required")
    }
    else{
        const user_ = await user.findOne({etoken : token})
        if(user_ && user_.isReset === true){
            user_.password = await bycrpt.hash(password,salt)
            res.status(200).send("password is reset")
            await user_.save()
        }
        else{
            res.status(400).send('password is not reset')
        } 
    }
    
    
}

// method : get
// url : api/auth/logout
// acces : Public

const logout = (req,res) => {
    if(ls('token')){
        ls.remove('token')
        res.send("logout succussifly")
    }
}

const verify_email = async(req,res) => {
    try {
        const token = req.params.token
        const user_ = await user.findOne({eToken : token})
        if(user_){
            // user_.eToken = null,
            user_.isVerifed = true
            await user_.save()
            console.log("email is verified")
            res.redirect('http://localhost:3000/Login')
        }
        else{
            console.log("email is not verified")
        }
    } catch (error) {
        console.log(error)
    }
}

const verify_email_rest = async(req,res) => {
    try {
        let token = req.params.token
        const user_ = await user.findOne({etoken : token})
    if(user_){
        user_.isReset = true,
        await user_.save()
        res.redirect(`http://localhost:3000/resetpassword/:${token}`)

    }
    else{
        res.send("password is not verified")
    }
    } catch (error) {
        console.log(error)
    }
}


// generate jwt 'token'

const generateToken = (id,email,name) => {
    return jwt.sign({id,email,name}, process.env.JWT_SECRET , {expiresIn : '2d'})
}

module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword,
    logout,
    verify_email,
    verify_email_rest
}