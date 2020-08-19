const express = require("express");
const router = express.Router();
const db = require("./item-model");

router.get("/:shop_id/items", async (req, res, next) => {
    try{
        const shopId = req.params.shop_id
        const results = await db.find(shopId);
        res.json(results)
    }catch(err){
        next(err);
    }
})

router.post("/:shop_id/items", async (req, res, next) => {
    try{
            const {itemName, itemType, price, itemdesc, imageUrl} = req.body;
            if(!itemName, !itemType, !price, !itemdesc){
                res.status(500).json({errorMessage: "You need an more information to proceed!"});
            }else{
            const shopId = req.params.shop_id
            await db.create(shopId, itemName, itemType, price, itemdesc, imageUrl);
            res.status(201).json("You've successfully created a new item!");
            }
        }catch(err){
            next(err);
        }
})

router.get("/:shop_id/items/:item_id", async (req, res, next) => {
    try{
        ID = req.params.item_id
        const result = await db.findByID(ID);
        res.json(result)
    }catch(err){
        next(err);
    }
})

router.put("/:shop_id/items/:item_id", async (req, res, next) => {
    try{
        ID = req.params.item_id
        await db.updateName(req.body, ID);
        res.json("Item updated successfully!");
    }catch(err){
        next(err);
    }
})

router.delete("/:shop_id/items/:item_id", async (req, res, next) => {
    try{
        ID = req.params.item_id
        await db.remove(ID)
        res.json("Item deleted successfully")
    }catch(err){
        next(err);
    }
})

module.exports = router;