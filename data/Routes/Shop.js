const express = require("express");
const router = express.Router();
const db = require("./Shop-model");

router.get("/:id", async (req, res, next) => {
    try{
        const ID = req.params.id
        const result = await db.Find(ID)
        res.json(result);
    }catch(err){
        next(err)
    }
})

router.post("/:id", async (req, res, next) => {
    try{
        const ownerID = req.params.id
        const {shopName, shopLocation} = req.body;
        if(!shopName, !shopLocation){
            res.status(500).json({errorMessage: "You need more information"})
        }else{
            await db.CreateShop(ownerID, shopName, shopLocation)
            res.status(201).json("You have successfully created a shop!")
        }
    }catch(err){
        next(err)
    }
})

router.get("/:id/:shop_id", async (req, res, next) => {
    try{
        const shopId = req.params.shop_id
        const result = await db.FindById(shopId)
        res.json(result);
    }catch(err){
        next(err);
    }
})

router.put("/:id/:shop_id", async (req, res, next) => {
    try{
    const shopId = req.params.shop_id
    if(!req.body.shopName){
        res.status(500).json({errorMessage: "You need more information"})
    }else{
        await db.UpdateShop(shopId, req.body.shopName)
        res.status(201).json("You have successfully created a shop!")
    }
    }catch(err){
        next(err)
    }
})

router.delete("/:id/:shop_id", async (req, res, next) => {
    try{
        const shopId = req.params.shop_id
        await db.RemoveShop(shopId)
        res.json("Shop deleted!")
    }catch(err){
        next(err)
    }
})

module.exports = router;