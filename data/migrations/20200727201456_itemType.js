
exports.up = function(knex) {
    return knex.schema
    .createTable('itemType', tbl => {
        tbl.increments();
        tbl.text('itemType', 128)
            .notNull();
    })
};

exports.down = function(knex) {
  
};