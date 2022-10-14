const User= require("../database/user")


const getAllUsers=()=>{
  const users= User.getAllUsers()
  return users;
}
const getOneUser=(id)=>{
  const user= User.getOneUser(id)
  return user;
}
const createNewUser=()=>{
  return;
}
const updateOneUser=()=>{
  return;
}
const deleteOneUser=()=>{
  return;
}
module.exports={
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser
}