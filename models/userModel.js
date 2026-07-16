let data = [
{ id: 1, name: "aravinth", age: 20, city: "ludhiana" },
{ id: 2, name: "vijay", age: 19, city: "India" },
{ id: 3, name: "chithra", age: 43, city: "namakkal" },
{ id: 4, name: "raja", age: 16, city: "nkl" },
{ id: 5, name: "mownika", age: 18, city: "namakkal" },
{ id: 6, name: "Tamil", age: 47, city: "ludhiana" }
];

let id = 7;


export const getAllUsers = () => data;


export const getUserById = (ID) =>
data.find(user => user.id === ID);


export const addUser = (user) => {
const newUser = { id: id++, ...user };
data.push(newUser);
return newUser;
};


export const updateUser = (ID, user) => {
const index = data.findIndex(u => u.id === ID);
if (index === -1) return null;


data[index] = { id: ID, ...user };
return data[index];
};


export const deleteUser = (ID) => {
data = data.filter(u => u.id !== ID);
return data;
};