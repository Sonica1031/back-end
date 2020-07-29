
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('itemType').del()
    .then(function () {
      // Inserts seed entries
      return knex('itemType').insert([
        {id: 1, itemType: 'Vegetables'},
        {id: 2, itemType: 'Fruits'},
        {id: 3, itemType: 'Beans'},
        {id: 4, itemType: 'Grains'},
        {id: 5, itemType: 'Dairy'},
        {id: 6, itemType: 'Meat'}
      ]);
    });
};
