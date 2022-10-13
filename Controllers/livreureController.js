// method : get
// url : api/user/livreure
// acces : private
const GetUserLivreure = (req,res)=>{
    res.status(200).send('this a user livreure')
}
module.exports = {
    GetUserLivreure
}