const express = require("express");
const router = express.Router();
const db = require("../config");
const bcrypt = require("bcryptjs");
const { response } = require("express");

router.post("/", async (req, res, next) => {
    try{
        const {username, password, firstName, lastName, email} = req.body;
        const user = await db("owners").select("username").where("username", username);
        const userEmail = await db("owners").select("email").where("email", email);
        const hash = await bcrypt.hashSync(password, 12);
        if(!username || !password || !firstName || !lastName || !email){
            res.status(500).json({errorMessage: "Not Authorized"});
        }else if(user == "" && userEmail == ""){
            await db("owners").insert({username: username, password: hash, firstName: firstName, lastName: lastName, email: email});
            res.json("You've succesfully registered!");
            }else{
                res.status(500).json({errorMessage: "Username or E-mail already exists"});
            }
    }catch(err){
        next(err)
    }
})

module.exports = router;