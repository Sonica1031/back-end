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

router.post("/items", async (req, res, next) => {
    try{
            const {itemName, itemType, price, itemdesc, imageURL} = req.body;
            if(!itemName, !itemType, !price, !itemdesc){
                res.status(500).json({errorMessage: "You need an more information to proceed!"});
            }else{
            await db.create(itemName, itemType, price, itemdesc, imageURL);
            res.json("You've successfully created a new item!");
            }
        }catch(err){
            next(err);
        }
})

module.exports = router;