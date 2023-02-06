const mongoose = require("mongoose");

let BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user_profile",
      required: true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

let CommentSchema = new mongoose.Schema({
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_profile",
  },
  blog_id:{ type: mongoose.Schema.Types.ObjectId,
     ref:"blog"
    },
  title: { type: String, required: true },
});

BlogSchema = mongoose.model("blog", BlogSchema);
CommentSchema = mongoose.model("Comment", CommentSchema)


module.exports = { BlogSchema, CommentSchema };