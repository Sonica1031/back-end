const express = require("express");
const router = express.Router();
const db = require("./ItemType-model");

router.get("/", async (req, res, next) => {
    try{
       const result = await db.findAll();
       res.json(result);
    }catch(err){
        next(err);
    }
})

module.exports = router;