const express = require('express')
const router = express.Router()

const{GetUserClient} = require('../Controllers/clientController')

const {requiredLogin} = require('../Middleware/authMiddleware')

router.get('/client/me',requiredLogin,GetUserClient)

module.exports = router