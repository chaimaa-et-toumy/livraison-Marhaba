const mongoose = require('mongoose')
const Role = require('../Models/roleUserModel')
const roles =  ['client', 'manager', 'livreur']

const connectDb = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongoose connected : ${conn.connection.host}`)
        Role.countDocuments({}, async (err, count) => {
            if (err) {
              console.log(err);
              process.exit(1);
            } 
        if(count === 0) {
            for(let i = 0 ; i < roles.length ; i++){
                const role = new Role({role: roles[i]})
                await role.save()
            }
        }
    })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb