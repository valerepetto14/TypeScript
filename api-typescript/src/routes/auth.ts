import { Router } from "express"
import { Request, Response } from "express"
const router:Router = Router()

router.get("/login",(req:Request,res:Response)=>{
    res.send("hola")
})

export default router;