const express = require('express')
const router = express.Router()

const{Login,Register,ForgetPassword,ResetPassword,verify_email,verify_email_rest,logout} = require('../Controllers/authController')

router.post('/login',Login)
router.post('/register',Register)
router.post('/forgetpassword',ForgetPassword)
router.post('/resetpassword/:token',ResetPassword)
router.get('/logout',logout)
router.get('/verify_email/:token',verify_email)
router.get('/forgetPassword/:token',verify_email_rest)


module.exports = router