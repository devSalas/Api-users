const User= require("../database/user")
const {v4:uuid} = require('uuid')

const getAllUsers=()=>{
  const users= User.getAllUsers()
  return users;
}
const getOneUser=(id)=>{
  const user= User.getOneUser(id)
  return user;
}
const createNewUser=(newUser)=>{
  const userToInsert={
    ...newUser,
    id:uuid(),
    createdAt: new Date().toLocaleString("en-US",{timezone:"UTC"}),
    updateAt: new Date().toLocaleString("en-US",{timezone:"UTC"})

  }

   const createdUser= User.createNewUser(userToInsert)
  return createdUser;
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