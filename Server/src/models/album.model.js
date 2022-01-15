const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    
    name: { type: String, required: true, unique: true },
    cover_photo: { type: String,required: true},
    logo: { type: String , required: true},
    genre: { type: String, required: true},
    songs: [{type:mongoose.Schema.Types.ObjectId,ref:"Song",required:true}],
    year_of_release:{type:Number, required: true}
})

const Album = mongoose.model("album", albumSchema)

module.exports=Album