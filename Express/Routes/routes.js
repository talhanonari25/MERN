const express = require('express');
const User = require('../Controller/userController');
const Route = express.Router();

Route.post("/create", User.createUser);
Route.get("/show", User.showUser);
Route.put("/update/:_id", User.updateUser);
Route.delete("/delete/:_id", User.deleteUser);

module.exports = Route;