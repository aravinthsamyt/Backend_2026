import express from "express";
import {
getHome,
getUser,
createUser,
editUser,
removeUser
} from "../controllers/userController.js";


const router = express.Router();


router.get("/e", getHome);
router.get("/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", editUser);
router.delete("/users/:id", removeUser);


export default router;