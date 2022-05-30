/* IMPORT */
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const memberSchema = mongoose.Schema({
  name: { type: String, require: true, unique: true },
});

memberSchema.plugin(uniqueValidator);
/* IMPORT */
module.exports = mongoose.model("Member", memberSchema);
