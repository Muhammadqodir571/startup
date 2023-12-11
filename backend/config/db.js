const  Pool= require('pg').Pool


const pool= new Pool({
    user:'postgres',
    password:'2361201',
    database:'singupp',
    host:'localhost',
    port:5433
})


module.exports=pool