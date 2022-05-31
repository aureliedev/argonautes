/* IMPORT */
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 55,
      unique: true,
      trim: true, // Pr supprimer les espaces a la fin d'un pseudo par ex
    },
  },
  {
    timestamps: true, // date de creation et date de update
  }
);

memberSchema.plugin(uniqueValidator);

/* EXPORT */
module.exports = mongoose.model("Member", memberSchema);
