
exports.up = function(knex) {
    return knex.schema
    .createTable('items', tbl => {
        tbl.increments();
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
        tbl.text('itemLocation')
            .notNull();
    });
};

exports.down = function(knex) {
  
};
