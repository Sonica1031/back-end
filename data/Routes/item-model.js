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

const create = async (itemName, itemType, price, itemdesc, itemLocation, imageUrl) => {
    if (imageUrl != ""){
    await db('items').insert({itemName: itemName, itemType: itemType, price: price, itemdesc: itemdesc, imageUrl: imageUrl, itemLocation: itemLocation});
    return;
    }else{
    await db('items').insert({itemName: itemName, itemType: itemType, price: price, itemdesc: itemdesc, itemLocation: itemLocation});
    return;
    }
}

const updateName = async (oldName, newName) => {
    const itemInfo = await db("item").select("*").where("itemName", oldName);
    await db("item").insert(newName).where("itemName", itemInfo.itemName);
    return;
}

module.exports = {
    find,
    findAll,
    create,
    updateName
}