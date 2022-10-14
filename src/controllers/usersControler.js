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
  const {body}= req;

  if(!body.name ) return;
    
  const newUser={
    name:body.name,
  }
  const createNewUser= await usersService.createNewUser(newUser);

  res.status(201).send({status:"ok",data:createNewUser});


}
const updateOneUser =async (req,res)=>{
  const updatedOneUser=await usersService.updateOneUser(req.params.userId);
  res.send("Usuario Creado")
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