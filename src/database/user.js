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
  console.log(id)
  const [resultado] = await Pool.query(`SELECT * FROM USERS where id=${id}`) 
  return resultado
}

module.exports={
  getAllUsers,
  getOneUser,
}