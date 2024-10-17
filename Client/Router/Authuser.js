const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); 
const bcrypt = require("bcryptjs");
router.post('/add', async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    
    const user = await User.create({ email, password, username });

    return res.status(201).json({
      message: "User added successfully",
      success: true,
      user: {
        email: user.email,
        username: user.username
      },
    });
  } catch (error) {
    console.error("Add User Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
router.get('/:username', async (req, res) => {
  try {
    const { username } = req.params; 
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const { password, ...userData } = user.toObject();

    return res.status(200).json({
      success: true,
      user: userData,
    });
  } catch (error) {
    console.error("Get User Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;