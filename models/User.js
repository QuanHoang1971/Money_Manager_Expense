const mongoose = require("mongoose");

// sau khi thực hiện connection vs MongodB thì bắt đầu vs Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const usermodel = mongoose.model("Users", userSchema);
// template nthe

module.exports = usermodel;
