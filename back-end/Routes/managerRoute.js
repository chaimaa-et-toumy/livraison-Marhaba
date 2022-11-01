const express = require('express')
const router = express.Router()

const{GetUserManager} = require('../Controllers/managerController')

const {requiredLogin} = require('../Middleware/authMiddleware')


router.get('/manager/me',requiredLogin,GetUserManager)

module.exports = router