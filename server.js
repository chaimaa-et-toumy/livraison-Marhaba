require('dotenv').config()
const express = require('express')
const router = require('./Routes/authRoute')
const routerUserClient = require('./Routes/clientRoute')
const routerUserLivreure = require('./Routes/livreureRoute')
const routerUserManager = require('./Routes/managerRoute')
const routerUserLogout = require('./Routes/logout')
const errRoute = require('./Middleware/RouterError')
const connectDb = require('./config/DbConfig')

connectDb()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : false}))

app.use('/api/auth',router)
app.use('/api/user',[routerUserClient,routerUserLivreure,routerUserManager,routerUserLogout])
app.use(errRoute)

const port = process.env.PORT || 8080

app.listen(port,(err)=> {
    if(!err){
        console.log(`the port ${port} is running`)
    }
    else{
        console.log(err)
    }
})