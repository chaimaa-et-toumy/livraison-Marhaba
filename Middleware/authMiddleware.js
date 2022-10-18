const jwt = require('jsonwebtoken')
const user = require('../Models/userModel')

const requiredLogin = async(req,res,next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // get token from header
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decoded = jwt.verify(token , process.env.JWT_SECRET)

            //get user from token
            req.user = await user.findById(decoded.id).select('-password')
            next()
            
        } catch (error) {
            res.status(401).send(error)
           throw new Error ("Not authorized")
        }
    }

    if(!token){
        res.status(401).send("Not authorized , no token !")
    }
}

module.exports = {requiredLogin}