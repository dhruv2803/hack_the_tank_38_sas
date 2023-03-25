import express from "express";

const router = express.Router();

router.get("/franchise/:franchiseId",async(req,res)=>{
    // get franchise data from franchise id
});

router.post("/franchise/", async(req,res)=>{
    // store franchise data
});

router.get("/franchise/",async(req,res)=>{
    // get all franchise data
});
router.put("/franchise/",async(req,res)=>{
    // update franchise information
});

export default router;
