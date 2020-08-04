const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json());

const db =
  "mongodb+srv://khyatidxt:123456@12@cluster0.ipftu.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose
  .connect(db, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("connected to MongoDB Database..."))
  .catch((err) => console.log("Database connection error:" + err));

app.use(`/api/todo`, require(`./router/todo`));

const port = 5000;
app.listen(port, () => {
  console.log("server is started on Port" + port);
});
