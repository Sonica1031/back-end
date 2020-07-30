const express = require("express");
const LM = require("./Login-model.js");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const secret = require('../secret');

router.post("/", async (req, res, next) => {
    try{
    const {username, password} = req.body;
    const user = await LM.Find(username);
    const token = jas(user);
    console.log (token)
    if(!user || !bcrypt.compareSync(password, user[0].password)){
        res.status(500).json({errorMessage: "invalid user!"});
    }else{
        req.session.name = user[0].username;
        res.json({user, token});
    }
}catch(error){
    next(error);
}
})

const jas = (user) => {
    const payload = {
        subject: user.id,
        username: user.username,
    };
    const options = {
        expiresIn: '1d',
    };

    return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;