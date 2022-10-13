const  usersService= require("../services/usersServie")


const getAllUsers = (req,res)=>{
  const allusers= usersService.getAllUsers();
  res.send("Get all users")
}
const getOneUser = (req,res)=>{
  const user= usersService.getOneUser(req.params.userId);
  res.send(`Get one user ${req.params.userId}`)
}
const createNewUser = (req,res)=>{
  const createUser= usersService.createNewUser(req.params.userId);
  res.send(`Get all users ${req.params.userId}`)
}
const updateOneUser = (req,res)=>{
  const updatedOneUser= usersService.updateOneUser(req.params.userId);
  res.send("Get all users")
}
const deleteOneUser = (req,res)=>{
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