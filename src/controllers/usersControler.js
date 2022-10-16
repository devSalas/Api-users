const  usersService= require("../services/usersServie")


const getAllUsers =async (req,res)=>{
  const users= await usersService.getAllUsers()

  res.send(users)
}
const getOneUser =async (req,res)=>{
  const user=await usersService.getOneUser(req.params.userId);
  if(user.length==0 ) return res.send("NO FOUND")
  res.send(user)
}
const createNewUser =async (req,res)=>{
  const {body}= req;
  if(!body.name ) return res.send({error:"ha fallado, tal vez porque no ingresaste datos, como el nombre"});
  const newUser={
    name:body.name,
    lastName:body.lastName,
    Email:body.email,
    password:body.password
  }
  const createNewUser= await usersService.createNewUser(newUser);

  res.status(201).send({status:"ok",data:createNewUser});


}
const updateOneUser =async (req,res)=>{
  const updatedOneUser=await usersService.updateOneUser(req.params.userId,req.body);

  console.log(updatedOneUser)
  console.log(req.params.userId,req.body)
  res.send({response:"User updated"})
}
const deleteOneUser =async (req,res)=>{
  const userDeleted=await usersService.deleteOneUser(req.params.userId);
  if(!userDeleted) res.send({error:"USER NOT FOUND"})
  res.send({response:"User Deleted"})
}

module.exports={
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
}