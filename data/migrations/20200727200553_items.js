
exports.up = function(knex) {
    return knex.schema
    .createTable('items', tbl => {
        tbl.increments();
        tbl.integer('owner_id')
            .notNull()
            .references('id')
            .inTable('owners');
        tbl.integer('itemType')
            .notNull()
            .references('id')
            .inTable('itemType');
        tbl.text('itemName', 128)
            .notNull();
        tbl.text('itemdesc', 128)
            .notNull();
        tbl.integer('price')
            .notNull();
        tbl.text('imageUrl');
    });
};

exports.down = function(knex) {
  
};
