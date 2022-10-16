const express= require("express")

const router= express.Router()
const usersController= require("../../controllers/usersControler")


router
  .get("/",usersController.getAllUsers)
  .get("/:userId",usersController.getOneUser)
  .post("/",usersController.createNewUser)
  .put("/:userId",usersController.updateOneUser)
  .delete("/:userId",usersController.deleteOneUser)


  module.exports= router
  //usersController.getAllUsers()