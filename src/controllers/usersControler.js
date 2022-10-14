const  usersService= require("../services/usersServie")


const getAllUsers =async (req,res)=>{
  const users= await usersService.getAllUsers()

  res.send(users)
}
const getOneUser =async (req,res)=>{
  const user=await usersService.getOneUser(req.params.userId);
  res.send(user)
}
const createNewUser =async (req,res)=>{
  const createUser=await usersService.createNewUser(req.params.userId);
  res.send(`Get all users ${req.params.userId}`)
}
const updateOneUser =async (req,res)=>{
  const updatedOneUser=await usersService.updateOneUser(req.params.userId);
  res.send("Get all users")
}
const deleteOneUser =async (req,res)=>{
  usersService.deleteOneUser(req.params.userId);
  res.send("Get all users")
}

module.exports={
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
}