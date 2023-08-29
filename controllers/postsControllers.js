import { Post } from "../models/postModel.js";

export const createPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
        res.status(200).send({
            status: 'Success',
            message: 'Post created successfully',
            post: newPost
        })
    } catch (error) {
        res.status(500).send({
            status: 'Failed',
            message: error.message
        })
    }
}

export const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({$set: req.body});
            res.status(200).send({
                status: 'Success',
                message: 'Post updated'
            })
        } else {
            res.status(400).send({
                status: 'Failed',
                message: 'You are not the author of this post'
            })
        }
    } catch (error) {
        res.status(500).send({
            status: 'Failed',
            message: error.message
        })
    }
}

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).send({
                status: 'Success',
                message: 'Post deleted'
            })
        } else {
            res.status(400).send({
                status: 'Failed',
                message: 'You are not the author of this post'
            })
        }
    } catch (error) {
        res.status(500).send({
            status: 'Failed',
            message: error.message
        })
    }
}
