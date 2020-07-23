const express = require("express");
const router = express.Router();
const db = require("../config");
const bcrypt = require("bcrypt");

router.post("/", async (req, res, next) => {
    try{
        const {username, password} = req.body;
        const hash = bcrypt.hashSync(password, 12);
        if(!username || !password){
            res.status(500).json({errorMessage: "Not Authorized"});
        }else{
            pass = 
            await db("owners").insert({username: username, password: hash});
            res.json("You've succesfully registered!");
            }
    }catch(err){
        next(err)
    }
})

module.exports = router;