const express = require('express');
const router = express.Router();
const Post = require('../models/postmodel'); 
router.post('/add', async (req, res) => {
    const { user, post } = req.body;
    try {
        const newPost = new Post({ user, post });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/all', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/user/:username', async (req, res) => {
    const { username } = req.params;

    try {
        const posts = await Post.find({ user: username });
        if (posts.length === 0) return res.status(404).json({ message: 'No posts found for this user' });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 