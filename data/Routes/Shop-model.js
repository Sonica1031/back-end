const db = require("../config");

const find = async (ownerID) => {
   const shopInfo = await db("shop").select("*").where("owner_id", ownerID);
   return shopInfo
}

const create = async (shopName, description, ownerID) => {
    await db('shop').insert({shopName: shopName, description: description, owner_id: ownerID});
    return;
}

const updateName = async (ownerID, newName) => {
    const shopInfo = await db("shop").select("*").where("owner_id", ownerID);
    // await db("shop").insert(newName).where("shopName", shopInfo.shopName);
}

module.exports = {
    find,
    create,
    updateName
}