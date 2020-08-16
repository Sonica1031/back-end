bcrypt = require('bcryptjs');

hash = bcrypt.hashSync('sample', 12)

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('owners').del()
    .then(function () {
      // Inserts seed entries
      return knex('owners').insert([
        {id: 1, username: 'sample', password: hash, email: 'sample@sample.com', firstName: 'sample', lastName: 'sample'},
      ]);
    });
};