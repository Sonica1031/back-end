
exports.up = function(knex) {
    return knex.schema
    .createTable('shop', tbl => {
        tbl.increments();
        tbl.integer('owner_id')
            .notNull()
            .references('id')
            .inTable('owners');
        tbl.text('shopName', 128)
            .notNull()
            .unique();
        tbl.text('description', 128)
            .notNull();
    })
};

exports.down = function(knex) {
  
};
