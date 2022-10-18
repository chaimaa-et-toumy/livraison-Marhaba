// method : get
// url : api/user/client

const user = require("../Models/userModel")

// acces : private
const GetUserClient = async(req,res)=>{
    // const {_id , name ,email} = await user.findById(req.user.id)
    // res.status(200).json({
    //     id : _id,
    //     name,
    //     email
    // })
    res.status(200).send('this a user client')
}
module.exports = {
    GetUserClient
}