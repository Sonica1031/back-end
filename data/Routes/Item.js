const express = require("express");
const router = express.Router();
const db = require("./item-model");

router.get("/items", async (req,res, next) => {
    try{
       const item = await db.findAll();
       res.json(item);
    }catch(error){
        next(error);
    }
})

module.exports = router;