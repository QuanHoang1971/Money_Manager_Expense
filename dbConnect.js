const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://quan1:Congthanh321@cluster0.a8obssa.mongodb.net/Expanse",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.on("error", (err) => console.log(err));

connection.on("connected", () =>
  console.log("Mongo DB Connection Successfull")
);
