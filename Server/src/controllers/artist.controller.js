
const express=require('express')
const Artist=require('../models/artist.model')
const router = express.Router();



// //find by name...
// router.get(":name", async (req, res) => {
//   try {
   
//       const artist = await Artist.findByName({name: req.params.name}).populate("albums").lean().exec()
//       return res.status(200).send(artist)
//   } catch (err) {
//       return res.status(400).send(err.message)
//   }
// })

router.get("", async (req, res) => {
    try {
        const artist = await Artist.find().populate("albums").lean().exec()
        return res.status(200).send(artist)
    } catch (err) {
        return res.status(400).send(err.message)
    }
})


router.post("", async (req, res) => {
    try {
        const artist = await Artist.create(req.body);
        return res.status(200).send(artist);
    } catch (err) {
        return res.status(400).send(err.message)
    }
})

module.exports=router