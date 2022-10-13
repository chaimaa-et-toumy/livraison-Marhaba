const express = require('express')
const router = express.Router()

const{GetUserManager} = require('../Controllers/managerController')


router.get('/manager',GetUserManager)

module.exports = router