//database import qilish 
const pool = require('../config/db')

//method GET
//ROUTE   /API/MY
//DSRC     GET DATA BASE


const  getUserByDairy= async (req,res)=>{
    try {
        const data= await pool.query('SELECT * FROM  loginusers')
        res.end('{{}}',{
            title:'sing up page',
            data: data.rows
        }) 
    } catch (error) {
        console.log(error);
    }
   
    console.log(data);

}
//method post
//ROUTE   /API/MY
//DSRC     GET DATA BASE


const  postUserByDairy= async (req,res)=>{
    try {
        const data= await pool.query('INSERT INTO  loginusers(email,password,username)  VALUES($1,$2,$3',[req.body.email,req.body.password,req.body.username])
        res.render('/registr',{
            title:data.username.rows[0],
            data: data.rows
        })
    } catch (error) {
        console.log(error);
    }
 }
  //method put
//ROUTE   /API/MY
//DSRC     GET DATA BASE
 const  putByUsers=async(req, res)=> {
    try {
        const data =await pool.query()
        res.render('',{
            title: 'put  login users',
            data:data.rows[0]
        }) 
    } catch (error) {
        console.log(error);
    }
 
};
 //method delete
//ROUTE   /API/MY
//DSRC     GET DATA BASE
const deleteByUsers=async (req, res)=> {
    try {
        const data =await pool.query( "DELETE FROM loginusers WHERE id=$1",[req.params.id] )
        res.render('',{
            title: 'put  login users',
            data:data.rows[0]
        })
    } catch (error) {
        
    }
   
};

module.exports={
    getUserByDairy,
    postUserByDairy,
    putByUsers,
    deleteByUsers
}