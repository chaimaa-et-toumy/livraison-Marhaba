const express = require('express')
const router = express.Router()

const{GetUserLivreure} = require('../Controllers/livreureController')

const {requiredLogin} = require('../Middleware/authMiddleware')

router.get('/livreur/me',requiredLogin,GetUserLivreure)

module.exports = router