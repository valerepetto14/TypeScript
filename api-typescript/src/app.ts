import {Request, Response} from "express";
import express from "express"
const app = express()


//import de rutas
import auth from "./routes/auth"
    //middlewares
app.use(express.json())
app.use("/", auth)

app.get("/",(req:Request,res:Response)=>{
    res.send("holaaaaaa")
})

app.listen(3000, ()=>{
    console.log("serven running in port 3000");
})