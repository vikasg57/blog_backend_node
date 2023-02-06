const mongoose = require("mongoose");

let UserProfileSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    mobile: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

let UserProfileFollowingMapSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user_profile",
    },
    follower_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user_profile",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserProfileFollowingMapSchema = mongoose.model(
  "user_profile_following_map",
  UserProfileFollowingMapSchema
);
UserProfileSchema = mongoose.model(
    "user_profile",
     UserProfileSchema
);

module.exports = { UserProfileFollowingMapSchema, UserProfileSchema };