const express= require('express')
const v1router= require('./v1/routes/userRoutes')
const cors=require("cors")
const app= express()
const PORT= process.env.PORT || 3000
app.use(cors)
app.use("/api/v1/users",v1router)


app.listen(PORT,()=>{
  console.log("server on encendido")
})