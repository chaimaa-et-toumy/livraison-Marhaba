const moongose = require('mongoose')

const userSchema = moongose.Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        required : [true , "please enter a email"],
        unique : true
    },
    eToken : {
        type : String,
    },
    password : {
        type : String
    },
    image :{
        type : String
    },
    phoneNumber : {
        type : Number
    },
    Adress : {
        type : String
    },
    isVerifed : {
        type : Boolean,
        default : false
    },
    isReset : {
        type : Boolean
    },
    role : {
        type : moongose.Schema.Types.ObjectId,
        ref : 'Role'
    },
},{
    timestamps : true
})

module.exports = moongose.model('user',userSchema)

