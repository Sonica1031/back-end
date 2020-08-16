
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shop').del()
    .then(function () {
      // Inserts seed entries
      return knex('shop').insert([
        {id: 1, owner_id: 1, shopName: 'Not A Real Shop!', shopLocation: 'Nowhere!'},
      ]);
    });
};