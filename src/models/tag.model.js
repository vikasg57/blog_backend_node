const mongoose = require('mongoose')

let TagSchema = new mongoose.Schema({
  title: { type: String, required: true },
  color_hex: { type: String},

},{
    timestamps:true,
    versionKey:false
});

TagSchema = mongoose.model('tag', TagSchema);

module.exports = TagSchema;