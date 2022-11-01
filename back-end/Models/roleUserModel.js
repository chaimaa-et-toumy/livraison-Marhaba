const moongose = require('mongoose')

const userRoleSchema = moongose.Schema({
    role : {
        type : String,
    }
},{
    timestamps : true
})

module.exports = moongose.model('Role',userRoleSchema)