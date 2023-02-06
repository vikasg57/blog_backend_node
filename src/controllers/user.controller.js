const express = require('express');
const { UserProfileFollowingMapSchema } = require('../models/user.model');

const router = express.Router();

router.post("", async (req, res) => {
  try {
    let user_profile_following_map = await UserProfileFollowingMapSchema.create(
      req.body
    );

    res.status(200).send(user_profile_following_map);
  } catch (er) {
    res.status(500).send(er.message);
  }
});

router.get("", async (req, res) => {
  try {
    let user_profile_following_map = await UserProfileFollowingMapSchema.find()
      .populate([
        {
          path: "user_id",
          select: ["first_name", "last_name", "email", "mobile"],
        },
        {
          path: "follower_id",
          select: ["first_name", "last_name", "email", "mobile"],
        },
      ])
      .lean()
      .exec();;

    res.status(200).send(user_profile_following_map);
  } catch (er) {
    res.status(500).send(er.message);
  }
});

module.exports = router;