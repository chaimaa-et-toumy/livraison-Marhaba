const express = require('express')
const router = express.Router()

const{GetUserLivreure} = require('../Controllers/livreureController')

router.get('/livreure',GetUserLivreure)

module.exports = router