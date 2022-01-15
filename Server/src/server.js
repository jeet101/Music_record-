const express = require("express");
const app = express();
 const cors = require("cors");
const connect=require("./configs/db")
 app.use(cors())
app.use(express.json());
// require('dotenv').config();

const songController = require("./controllers/song.controller")
app.use("/song", songController)

const albumController = require("./controllers/album.controller");
app.use("/album", albumController);

const artistController = require("./controllers/artist.controller");
app.use("/artist", artistController);

// const port=process.env.PORT || 5000

app.listen(5000, (req, res) => {
    connect();
    console.log(`connected to 5000`);
})