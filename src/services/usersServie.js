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
const updateOneUser=(id,body)=>{
    const updatedOneUser= User.UpdateOneUser(id,body)
  return updateOneUser;
}

const deleteOneUser=(id)=>{
  const deleteOneUser = User.deleteOneUser(id)
  
  return deleteOneUser;
}
module.exports={
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser
}