const {createPool}=require("mysql2/promise")

 const DB_HOST= process.env.DB_HOST || 'localhost'
 const DB_USER= process.env.DB_USER || 'root'
 const DB_PASSWORD= process.env.DB_PASSWORD || ''
 const DB_NAME= process.env.DB_NAME || 'instituto'
 const DB_PORT= process.env.DB_PORT || 3306
/*  const DB_HOST=  'localhost'
 const DB_USER= 'root'
 const DB_PASSWORD=  ''
 const DB_NAME=  'instituto'
 const DB_PORT=  3306 */


const Pool=createPool({
  user:DB_USER,
  password:DB_PASSWORD,
  host:DB_HOST,
  port:DB_PORT,
  database:DB_NAME,
})



const getAllUsers=async()=>{
  const [resultado] = await Pool.query(`SELECT * FROM USERS`) 
  return resultado
}
const getOneUser=async(id)=>{
  const [resultado] = await Pool.query(`SELECT * FROM USERS where id=${id}`) 
  return resultado
}
const createNewUser=async(newUser)=>{
  const allUsers= await getAllUsers()
  const isAlreadyAdded= allUsers.findIndex(el=>(el.name == newUser.name)> -1)
  if(isAlreadyAdded)return
  //console.log(newUser)

  Pool.query(`INSERT INTO USERS(id,name)VALUES(null,"${newUser.name}")`) 
  return newUser;
}
const UpdateOneUser=async(id,body)=>{
  const [resultado] = await Pool.query(`UPDATE USERS SET name="${body.name}",Email="${body.Email}" ,password="${body.password}",lastName="${body.lastName}" WHERE id=${id}`) 
  console.log(resultado)
  return resultado;
}
const deleteOneUser=async(id)=>{
  const isRegistered= await getOneUser(id)
  if(isRegistered.length ==0) return;
  const [resultado] = await Pool.query(`DELETE from USERS where id=${id}`)
  return resultado;
}


module.exports={
  getAllUsers,
  getOneUser,
  createNewUser,
  UpdateOneUser,
  deleteOneUser
}