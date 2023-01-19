const mongoose = require("mongoose");

const minionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a Name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    age: {
      type: Number,
      required: [true, "Please provide a Age"],
    },
    color: {
      type: String,
      required: [true, "Please provide a Color Name"],
    },
  },
  {
    timestamps: true,
  }
);

const Minion = mongoose.model("Minion", minionSchema);

module.exports = Minion;

// json data type

// {
//     "name": "Md. Mohon",
//     "age": 20,
//     "color": "White"
// }
