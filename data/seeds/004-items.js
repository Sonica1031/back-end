
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, itemType: 1, shopId: 1, itemName: "Broccoli", itemdesc: "Fresh, Delicious produce!", price: 1.50},
        {id: 2, itemType: 2, shopId: 1, itemName: "Granny Smith Apple", itemdesc: "Fresh, Delicious produce!", price: 0.50},
        {id: 3, itemType: 3, shopId: 1, itemName: "Black Beans", itemdesc: "Fresh, Delicious Produce!", price: 2.00},
        {id: 4, itemType: 4, shopId: 1, itemName: "Oats", itemdesc: "Organic oats", price: 2.50},
        {id: 5, itemType: 5, shopId: 1, itemName: "Milk", itemdesc: "Fresh Milk", price: 2.50},
        {id: 6, itemType: 6, shopId: 1, itemName: "Stew Meat", itemdesc: "Farm-fed beef", price: 7.50}
      ]);
    });
};