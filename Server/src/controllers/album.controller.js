// const express = require('express');
// const router = express.Router();

// const Album = require("../models/album.model");

// // post album...
// router.post("/", async (req, res) => {
//   console.log("yes");
//   try {
//     const album = await Album.create(req.body);
//     return res.status(200).send(album);
//   } catch (err) {
//     console.log("err");
//     return res.status(400).send(err.message);
//   }
// });

// // get all albums...
// router.get("/", async (req, res) => {
//   try {
//     const album = await Album.find().populate("songs").lean().exec();
//     return res.status(200).send(album);
//   } catch (err) {
//     return res.status(400).send(err.message);
//   }
// });


// module.exports=router


const express=require('express')
const Album=require('../models/album.model')
const router = express.Router();

router.get("", async (req, res) => {
    try {
        const album = await Album.find().populate("songs").lean().exec()
        return res.status(200).send(album)
    } catch (err) {
        return res.status(400).send(err.message)
    }
})

router.post("", async (req, res) => {
    try {
        const album = await Album.create(req.body);
        return res.status(200).send(album);
    } catch (err) {
        return res.status(400).send(err.message)
    }
})

module.exports=router