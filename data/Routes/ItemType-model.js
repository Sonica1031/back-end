const db = require("../config");

const findAll = async () => {
   const result = await db("itemType").select("*")
   return result;
}

module.exports = {
    findAll
}