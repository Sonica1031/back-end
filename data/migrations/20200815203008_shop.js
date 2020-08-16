const { table } = require("../config");

exports.up = function(knex) {
  return knex.schema
    .createTable('shop', tbl => {
        tbl.increments();
        tbl.integer('owner_id')
            .references('id')
            .inTable('owners');
        tbl.text('shopName', 128)
            .notNull()
            .unique();
        tbl.text('shopLocation', 128)
            .notNull();
    })
};

exports.down = function(knex) {
  
};
