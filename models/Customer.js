const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    no_of_person: { type: Number},
    date: { type: Date  },
    duration: { type: Number },
    message: { type: String},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", UserSchema);
