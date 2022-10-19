const user = require('../Models/userModel')
const bycrpt = require('bcryptjs')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const {sendEmail,forgetPassword} = require('../Utils/sendEmail')

// method : post
// url : api/auth/login
// acces : Public
const Login = async(req,res) => {

    const {email,password} = req.body

    if(!email || !password){
        res.status(400).send("please enter a username and password")
    }

    // check user email
    const user_ = await user.findOne({email})
    
    if(user_ && (await bycrpt.compare(password,user_.password))){
        res.status(200).json({
            _id : user_.id,
            name : user_.name,
            email : user_.email,
            token : generateToken(user_.id)
        })
        verify_email(req,res)
    }
    else{
        res.status(400).send("invalid data")
    } 

}

// method : post
// url : api/auth/register
// acces : Public

const Register = async(req,res) => {

    const {name , email , password} = req.body

    // if empty
    if(!name || !email || !password){
        res.status(400).send("Please add All fields")
    }

    // check if user exist
    const userExist = await user.findOne({email})
    if(userExist){
        res.status(400).send("User already exist")
    }

    // hash password
    const salt = await bycrpt.genSalt(10)
    const haschedPassword = await bycrpt.hash(password,salt)


    // create user
    const user_ = await user.create({
        name,
        email,
        password : haschedPassword,
        eToken : crypto.randomBytes(64).toString('hex'),
        isVerifed : false
    })

    sendEmail(req,user_,res)
    
    if(user_){
        res.status(201).json({
            _id : user_.id,
            name : user_.name,
            email : user_.email,
            password : user_.password,
            token : generateToken(user_.id),
            eToken : user_.eToken,
            isVerifed : user_.isVerifed
        })
    }
    else{
        res.status(400).send("invalid data")
    }
    
}

// method : post
// url : api/auth/Forgetpassword
// acces : Public

const ForgetPassword = async(req,res) => {
    const email = req.body.email
    if(!email){
        res.send("email is required")
    }
    const user_ = await user.findOne({email})

    if(user_){
        res.status(201).json({
        _id : user_.id,
        email : user_.email,
        etoken : jwt.sign({_id : user_.id}, process.env.JWT_SECRET , {expiresIn : '10m'})
    })

    forgetPassword(req,user_,res)
    }
    else{
        res.status(404).send("user not found")
    }
}

// method : post
// url : api/auth/resetpassword
// acces : Public

const ResetPassword = async(req,res) => {
 res.send("hi")
}


const verify_email = async(req,res) => {
    try {
        const token = req.params.token
        const user_ = await user.findOne({eToken : token})
        if(user_){
            user_.eToken = null,
            user_.isVerifed = true
            await user_.save()
            console.log("email is verified")
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
        user_.etoken = null,
        await user_.save()
        res.send("reset")
        console.log("password is verified")

    }
    else{
        console.log("password is not verified")
        res.send("password is not verified")
    }
    } catch (error) {
        console.log(error)
    }
}


// generate jwt 'token'

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET , {expiresIn : '2d'})
}

module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword,
    verify_email,
    verify_email_rest
}