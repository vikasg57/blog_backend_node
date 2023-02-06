const {BlogSchema, CommentSchema} = require("../models/blog.model");

const authorize = require("../middleware/authorize")
const express = require("express");

router = express.Router()

router.post('', async (req, res) => {
    try {
        let blog =await BlogSchema.create(req.body)

        return res.status(200).send(blog);

    }
    catch(err) {
        
        res.status(500).send(er.message);

    }
})

router.get("", authorize, async (req, res) => {
  try {
    let blog = await BlogSchema.find({author_id:req.user._id}).populate({path:"author_id",select:["email","first_name","last_name","mobile"]}).lean().exec();

    return res.status(200).send(blog);
  } catch (er) {
    res.status(500).send(er.message);
  }
});

module.exports = router;