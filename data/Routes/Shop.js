const express = require("express");
const router = express.Router();
const db = require("../Routes/Shop-model");
const authentication = require("../middleware/authenticate-middleware");

router.get('/:id', authentication, async (req, res, next) => {
    try{
      const results = await db.find(req.params.id)
      res.json(results);
    }
    catch(err){
        next(err);
    }
})

router.post('/:id', authentication, async (req, res, next) => {
    try{
        const {shopName, description} = req.body;
        const ownerID = req.params.id;
        if(!shopName, !description, !ownerID){
            res.status(500).json({errorMessage: "You need a shop name and description to proceed!"});
        }else{
        await db.create(shopName, description, ownerID);
        res.json("You've successfully created a new shop!");
        }
    }catch(err){
        next(err);
    }
})

module.exports = router;