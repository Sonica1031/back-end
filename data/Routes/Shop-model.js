const db = require("../config");

const Find = async (ID) =>{
   const result = await db("shop").where("owner_id", ID)
   return result;
}

const FindById = async (ID) =>{
    const result = await db("shop").where("id", ID)
    return result;
}

const CreateShop = async (ownerID, shopName, shopLocation) =>{
    await db("shop").insert({owner_id: ownerID, shopName: shopName, shopLocation: shopLocation})

}

const UpdateShop = async (ID, newName) => {
    await db("shop").update({shopName: newName}).where("id", ID)
}

const RemoveShop = async (ID) =>{
    await db("shop").where("id", ID).del();
}

module.exports = {
    Find,
    FindById,
    CreateShop,
    UpdateShop,
    RemoveShop
}