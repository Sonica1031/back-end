const { table } = require("../config");

exports.up = function(knex) {
  return knex.schema
    .createTable('owners', tbl => {
        tbl.increments();
        tbl.text('username', 128)
            .unique()
            .notNullable();
        tbl.text('password', 128)
            .notNullable();
        tbl.text('email', 128)
            .notNullable()
            .unique();
        tbl.text('firstName', 128)
            .notNullable();
        tbl.text('lastName', 128)
            .notNullable();
    })
};
exports.down = function(knex) {
  
};
