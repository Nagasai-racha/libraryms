const user = require("../models/userModel");

//get all users
const getAll = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

//create a user
const createUser = async (req, res) => {
  try {
    const newUser = new user(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
  }
};

//update a user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const User = await user.findById(id);
    if (User) {
      const updatedUser = await user.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
};

//get a single user
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const User = await user.findById(id);
    if (User) {
      res.status(200).json(User);
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
};

//delete a user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const User = await user.findById(id);
    if (User) {
      const deletedUser = await user.findByIdAndDelete(id); 
      res.status(200).json(deletedUser);
      } else {
        res.status(404).json({ message: "User Not Found" });
      }
    } catch (err) {
      console.log(err);
    }
  };

module.exports = {
  getAll,
  createUser,
  updateUser,
  getUser,
  deleteUser
};
