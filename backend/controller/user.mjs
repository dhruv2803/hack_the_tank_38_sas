import express from "express";

const router = express.Router();

router.get("/client/:clientId",async(req,res)=>{
    // get client data from client id
});

router.post("/client/", async(req,res)=>{
    // store client data
});

router.get("/client/",async(req,res)=>{
    // get all client data
});
router.put("/client/",async(req,res)=>{
    // update client information
});

export default router;
