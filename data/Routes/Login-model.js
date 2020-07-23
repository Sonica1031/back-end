const db = require("../config");

const Find = async (item) =>{
    const result = await db("owners").select("*").where("username", item);
    return result;
}

const FindById = async (item) =>{
    const result = await db("owners").select("*").where("id", item);
    return result;
}

module.exports = {
    Find,
    FindById
}