// câu lệnh để lviec vs express
const express = require("express");
const app = express();
// import dbConnect vào server
const dbConnect = require("./dbConnect");
app.use(express.json());
const userRoute = require("./routes/usersRoute");
const transactionsRoute = require("./routes/transactionsRoute");

// kết nối trung gian giữa route và MongoDB để lấy data
// khi có keyword này thì sẽ link đến transactionsRoute
// sẽ kiểm tra nếu dùng link này thì sẽ chuyển đến route tương ứng
// api route này sẽ in ra ở MongoDB,
app.use("/api/users/", userRoute);
app.use("/api/transactions/", transactionsRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`NodeJS server start at port ${port}`));
