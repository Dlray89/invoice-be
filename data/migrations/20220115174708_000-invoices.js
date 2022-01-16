exports.up = function (knex) {
  return knex.schema.createTable("invoices", (invoices) => {
    invoices.increments();

    invoices.timestamp("createdAt").defaultTo(knex.fn.now());
    invoices.date("invoiceDate")
    invoices.text("description", 400).notNullable();
    invoices.date("paymentDue")
    invoices.integer('paymentTerms')
    invoices.text("clientName", 200).notNullable();
    invoices.text("clientEmail", 200).notNullable().unique();
    invoices.boolean("status", false);
    invoices.integer("total");
    invoices.text('senderStreet', 400)
    invoices.text('senderCity', 400)
    invoices.text('senderState', 400)
    invoices.text('senderZipcode', 400)
    invoices.text('clientStreet', 400)
    invoices.text('clientCity', 400)
    invoices.text('clientState', 400)
    invoices.text('clientZipcode', 400)
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("invoice");
};
