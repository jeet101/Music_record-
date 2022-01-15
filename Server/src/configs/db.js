const mongoose = require('mongoose');

const connect = () => mongoose.connect("mongodb://localhost:27017/music_record");
    
module.exports=connect