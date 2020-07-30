const db = require("../config");
const { response } = require("express");

const find = async (ownerID) => {
   const itemInfo = await db("items").select("*").where("owner_id", ownerID);
   return itemInfo
}

const findAll = async () => {
    const itemInfo = await db("items").select("*")
    return itemInfo;
}

const create = async (itemName, itemType, price, itemdesc, ownerID, imageURL) => {
    if (imageURL != ""){
    await db('items').insert({itemName: itemName, itemType: itemType, price: price, itemdesc: itemdesc, owner_id: ownerID, imageURL: imageURL});
    return;
    }else{
    await db('items').insert({itemName: itemName, itemType: itemType, price: price, itemdesc: itemdesc, owner_id: ownerID});
    return;
    }
}

const updateName = async (ownerID, newName) => {
    const itemInfo = await db("shop").select("*").where("owner_id", ownerID);
    await db("item").insert(newName).where("itemName", itemInfo.itemName);
    return;
}

module.exports = {
    find,
    findAll,
    create,
    updateName
}