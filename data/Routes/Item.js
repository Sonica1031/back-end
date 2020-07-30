const express = require("express");
const router = express.Router();
const db = require("./item-model");
const { OPEN_READWRITE } = require("sqlite3");
const { route } = require("./Owners");

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
            const {itemName, itemType, price, itemdesc, imageUrl, itemLocation} = req.body;
            if(!itemName, !itemType, !price, !itemdesc, !itemLocation){
                res.status(500).json({errorMessage: "You need an more information to proceed!"});
            }else{
            await db.create(itemName, itemType, price, itemdesc, itemLocation, imageUrl);
            res.status(201).json("You've successfully created a new item!");
            }
        }catch(err){
            next(err);
        }
})

router.put("/items/:id", async (req, res, next) => {
    try{
        if(!req.body.itemName){
            res.json({errorMessage: "Need more information"})
        }else{
        ID = req.params.id
        await db.updateName(req.body.itemName, ID);
        res.json("Item updated successfully!");
        }
    }catch(err){
        next(err);
    }
})

router.delete("/items/:id", async (req, res, next) => {
    try{
        ID = req.params.id
        await db.remove(ID)
        res.json("Item deleted successfully")
    }catch(err){
        next(err);
    }
})

module.exports = router;