import express from "express";
import { createPost, updatePost, deletePost } from "../controllers/postsControllers.js";

const postsRoutes = express.Router();

// create post
postsRoutes.post ('/', createPost);

// update post
postsRoutes.put ('/:id', updatePost);

// delete post
postsRoutes.delete ('/:id', deletePost);

export default postsRoutes