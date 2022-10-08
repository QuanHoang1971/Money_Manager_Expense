const mongoose = require("mongoose");

// dùng câu lệnh này để tránh bị lỗi
mongoose.connect(
  "mongodb+srv://quan1:Congthanh321@cluster0.a8obssa.mongodb.net/Expanse",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

// kiểm tra error hay success
connection.on("error", (err) => console.log(err));

connection.on("connected", () =>
  console.log("Mongo DB Connection Successfull")
);
