import express  from "express";
import { getUsers, updateUser, deleteUser, getUser, followUser, unfollowUser } from "../controllers/usersControllers.js";

const usersRoutes = express.Router();

// Update user
usersRoutes.put('/:id', updateUser);

// Delete User
usersRoutes.delete('/:id', deleteUser);

// get a user
usersRoutes.get('/:id', getUser)

// follow user
usersRoutes.put('/:id/follow', followUser)

// unfollow user
usersRoutes.put('/:id/unfollow', unfollowUser)
export default usersRoutes;