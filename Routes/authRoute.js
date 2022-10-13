const express = require('express')
const router = express.Router()

const{Login,Register,ForgetPassword,ResetPassword} = require('../Controllers/authController')

router.post('/login',Login)
router.post('/register',Register)
router.post('/forgetpassword',ForgetPassword)
router.post('/resetpassword/:id',ResetPassword)

module.exports = router