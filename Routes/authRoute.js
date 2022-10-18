const express = require('express')
const { verify } = require('jsonwebtoken')
const router = express.Router()

const{Login,Register,ForgetPassword,ResetPassword,verify_email} = require('../Controllers/authController')

router.post('/login',Login)
router.post('/register',Register)
router.post('/forgetpassword',ForgetPassword)
router.post('/resetpassword/:token',ResetPassword)
router.get('/verify_email/:token',verify_email)

module.exports = router