import { User } from "../model/User";
import convertToBulletPoints from "./utils/convertToBulletPoints";
import topdf from "./utils/toPDF";
import { Router } from "express";
const router = new Router();

router.post("/ResumeCreation", async (req, res) => {
    // let user = await User.findOne({email: req.body.email});
    // if(user) return res.status(400).send("User already registerd!");
    
    try{
        // convert the paragraph to bullet points 
        req.body.education = convertToBulletPoints(req.body.education)

        // user = new User(req.body)
        
        // await user.save()

        // get the pdf 
        const pdfUrl = await topdf(req.body.education)
        
        res.send(pdfUrl)
    }catch (err){
        res.status(400).send(err.message)
    }
})

export default router;