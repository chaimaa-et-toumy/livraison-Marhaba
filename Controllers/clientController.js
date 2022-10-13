// method : get
// url : api/user/client
// acces : private
const GetUserClient = (req,res)=>{
    res.status(200).send('this a user client')
}
module.exports = {
    GetUserClient
}