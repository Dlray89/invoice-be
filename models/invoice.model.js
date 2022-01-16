const invoiceDB = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return invoiceDB("invoices");
}

function findById(id) {
  return invoiceDB("invoices").where({ id }).first();
}

function add(invoices) {
  return invoiceDB("invoices")
    .insert(invoices)
    .then((ids) => ({ id: ids[0], message: 'new invoice created', invoices }));
}

function update(change, id) {
    return invoiceDB('invoices').where({ id }).update(change, '*')
}

function remove(id) {
    return invoiceDB('invoice').where( {id}).del()
}
