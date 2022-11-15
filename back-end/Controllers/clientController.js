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
        const user = await User.findOne({_id: id}).populate("role")

        console.log(user)

        if(user  && user.role.role === "client"){
            // res.send('Bonjour '+user.name +' , votre rôle est : '+user.role.role)
            res.status(200).json({
                _id : user.id,
                name : user.name,
                email : user.email,
                role : user.role.role,
            })
        }
        else{
            res.send("you don't have acces to this page")
        }
}
}

module.exports = {
    GetUserClient
}