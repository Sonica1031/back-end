const express = require("express");
const LM = require("./Login-model.js");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post("/", async (req, res, next) => {
    try{
    const {username, password} = req.body;
    const user = await LM.Find(username);
    if(!user || !bcrypt.compareSync(password, user[0].password)){
        res.status(500).json({errorMessage: "invalid user!"});
    }else{
        req.session.name = user[0].username;
        res.json({user});
    }
}catch(error){
    next(error);
}
})

module.exports = router;