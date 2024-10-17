const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Post = mongoose.model('Post', postSchema); // 'Post' is the name of the collection
module.exports = Post;