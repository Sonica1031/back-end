function protect(req, res, next){
    if(req.session && req.session.name){
        next();
    }else{
        res.status(401).json({message: "You shall not pass!"});
    }
}

module.exports = protect;