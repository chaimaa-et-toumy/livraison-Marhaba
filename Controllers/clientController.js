// method : get
// url : api/user/client

const User = require("../Models/userModel")
let ls = require('local-storage')
const jwt = require('jsonwebtoken')

// acces : private
const GetUserClient = async (req,res) => {
    const token = ls('token');
    console.log(token)
    if(token) {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const id = decode.id
        const user = await User.findOne({_id: id})
        // const role = user.role

}  
    
}

module.exports = {
    GetUserClient
}