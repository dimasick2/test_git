// const { request } = require("http");

const mysql = require('mysql');
//конфигурация 
const connection = mysql.createConnection({
  host:"",
  user:"root",
  database:"pokolenie_test",
  password:""

});

connection.connect(err=>{
  if(err){
    console.log(err)
    return err;
  }else{
    console.log('server good')
  }
});