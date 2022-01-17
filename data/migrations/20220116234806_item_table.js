exports.up = function (knex) {
  return knex.schema.createTable("items", (invoicesItems) => {
    invoicesItems.increments();
    invoicesItems
      .integer("invoice_Id")
      .unsigned()
      .references("id")
      .inTable("invoices")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    invoicesItems.text("itemName", 200);
    invoicesItems.integer("QTY");
    invoicesItems.integer("Price");
    invoicesItems.integer("Total");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("items");
};
