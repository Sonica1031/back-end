
exports.up = function(knex) {
    return knex.schema
    .createTable('items', tbl => {
        tbl.increments();
        tbl.integer('shop_id')
            .notNull()
            .references('id')
            .inTable('shop');
        tbl.text('itemType', 128)
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
