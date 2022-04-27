const mongoose = require('mongoose');

const CODEDATA = new mongoose.Schema({
    uniqueid:{type:String, required:true},
    name:{type:String, required:true},
    htmlfile:{type:String, required:true},
    cssfile:{type:String, required:true},
    jsfile:{type:String, required:true}
  },
  {collection:"file-data"}
)

const model = mongoose.model('FileData',CODEDATA)

module.exports = model