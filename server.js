const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();
app.use(express.json());
const userRoute = require("./routes/usersRoute");
const transactionsRoute = require("./routes/transactionsRoute");

// kết nối trung gian giữa route và server để lấy data
// khi có keyword này thì sẽ link đến transactionsRoute
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
