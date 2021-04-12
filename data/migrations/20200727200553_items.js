
exports.up = function(knex) {
    return knex.schema
    .createTable('items', tbl => {
        tbl.increments();
        tbl.integer('itemType')
            .references('id')
            .inTable('itemType')
        tbl.integer('shopId')
            .references('id')
            .inTable('shop');
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
  return knex.schema
  .dropTable('items');
};
