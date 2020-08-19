const db = require("../config");
const { response } = require("express");

const find = async (shopId) => {
   const itemInfo = await db("items").select("*").where("shopId", shopId);
   return itemInfo
}

const findAll = async () => {
    const itemInfo = await db("items").select("*")
    return itemInfo;
}

const findByID = async (ID) => {
    const itemInfo = await db("items").select("*").where("id", ID);
    return itemInfo
}

const create = async (shopID, itemName, itemType, price, itemdesc, imageUrl) => {
    if (imageUrl != ""){
    await db('items').insert({itemName: itemName, itemType: itemType, price: price, itemdesc: itemdesc, imageUrl: imageUrl, shopId: shopID});
    return;
    }else{
    await db('items').insert({itemName: itemName, itemType: itemType, price: price, itemdesc: itemdesc, shopId: shopID});
    return;
    }
}

const updateName = async (newName, ID) => {
    await db("items").where("id", ID).update(newName);
    return;
}

const remove = async (ID) => {
    await db("items").where("id", ID).del();
    return;
}

module.exports = {
    find,
    findAll,
    findByID,
    create,
    updateName,
    remove
}