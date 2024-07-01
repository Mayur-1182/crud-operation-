const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const UserModel = require("./model/user");

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/crud")
  .then(() => {
    console.log("Database Connected successfully!!!");
  })
  .catch((err) => {
    console.log("Error Occurred!!!");
  });

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/create", (req, res) => {
  console.log(req.body);
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/update/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id }).then((result) => {
    console.log(result);
    return res.json(result);
  });
});

app.patch("/update/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.body, id);
  UserModel.findByIdAndUpdate(id, req.body, { new: true })
    .then(() => console.log("data updated successfully!!!!"))
    .catch((err) => console.log("error occurred!!!"));
});

app.listen(4000, () => {
  console.log("server is started!!");
});
