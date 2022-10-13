const express = require('express')
const router = express.Router()

const{GetUserClient} = require('../Controllers/clientController')

router.get('/client',GetUserClient)

module.exports = router