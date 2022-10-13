// method : get
// url : api/user/manager
// acces : private
const GetUserManager = (req,res)=>{
    res.status(200).send('this a user manager')
}
module.exports = {
    GetUserManager
}