let ls = require('local-storage')

const logout = (req,res) => {
    console.log(ls.remove('token'))
}
module.exports = {logout}