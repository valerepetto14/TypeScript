import { Router } from "express"
import { Request, Response } from "express"
import {login} from "../controllers/auth"
const router:Router = Router()

router.get("/login",login)

export default router;