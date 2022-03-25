const mongoose = require('mongoose');

const USER = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    filename:{type:String},
    uniqueid:{type:String}
  },
  {collection:"user-data"}
)

const model = mongoose.model('UserData',USER)

module.exports = model