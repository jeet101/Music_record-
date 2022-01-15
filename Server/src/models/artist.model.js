const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    
    name: { type: String, required: true, unique: true },
    password: { type: String,required: true},
  
    albums: [{type:mongoose.Schema.Types.ObjectId,ref:"album",required:true}]
   
})

const Artist = mongoose.model("artist", artistSchema)

module.exports=Artist