import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello");
})

app.listen(8081,()=>{
    console.log("server running....");
})