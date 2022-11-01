const express = require('express')
const errRoute = express()

errRoute.all('*',(req,res)=>{
    // create error and send it to error handling midleware
    const err = new Error(`can't find this route : ${req.originalUrl}`)
    res.status(400).send(err.message)
    })
module.exports = errRoute

