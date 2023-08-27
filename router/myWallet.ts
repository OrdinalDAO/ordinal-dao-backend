import express , {Request,Response} from "express"
const myWallet: express.Router = express.Router()
myWallet.use("/",(req: Request, res: Response)=>{
    res.send("myWallet")
})

export default myWallet;
