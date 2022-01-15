const express = require('express');
const router = express.Router();

const Song = require('../models/song.model');


//post song...
router.post('/', async (req, res) => {
  try {
    const song = await Song.create(req.body);
    return res.status(200).send(song)
  } catch (error) {
    return res.status(400).send(error.message);
  }
})

//get song all...
router.get("/", async (req, res) => {
  try {
      const song = await Song.find();
      return res.status(200).send(song)
  } catch (err) {
      return res.status(400).send(err.message)
  }
})

module.exports=router