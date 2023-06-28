const express=require('express');
const app=express();
const db=require('./config/db.js');
db.connect();
app.listen(80,()=>{
    console.log("hello");
    db.query('SELECT * from user',(err,rows,fields)=>{
        if(err) throw err;
        console.log(rows);
    })
})