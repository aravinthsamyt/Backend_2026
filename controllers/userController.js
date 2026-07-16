import {
getAllUsers,
getUserById,
addUser,
updateUser,
deleteUser
} from "../models/userModel.js";


export const getHome = (req, res) => {
res.json(getAllUsers());
};


export const getUser = (req, res) => {
const ID = parseInt(req.params.id);
const user = getUserById(ID);


if (!user) {
return res.status(404).json({ message: "User not found" });
}


res.json({ data: user });
};


export const createUser = (req, res) => {
const { name, age, city } = req.body;
const user = addUser({ name, age, city });


res.json({
message: "User added successfully",
user
});
};


export const editUser = (req, res) => {
const ID = parseInt(req.params.id);
const { name, age, city } = req.body;


const updated = updateUser(ID, { name, age, city });


if (!updated) {
return res.status(404).json({ message: "User not found" });
}


res.json({
message: "User updated successfully",
data: updated
});
};

export const removeUser = (req, res) => {
const ID = parseInt(req.params.id);
const remaining = deleteUser(ID);


res.json({
message: "Successfully deleted",
data: remaining
});
};