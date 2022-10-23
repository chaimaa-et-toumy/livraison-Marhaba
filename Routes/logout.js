const express = require('express')
const router = express.Router()

const{logout} = require('../Controllers/logout')

router.get('/logout',logout)

module.exports = router