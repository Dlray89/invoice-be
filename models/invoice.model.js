const invoiceDB = require("../data/db-config");
const mappers = require('../middleware/mappers')

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  getInvoiceItems
};

function find() {
  return invoiceDB("invoices");
}

function findById(id) {
  let query = invoiceDB("invoices as i");

  if (id) {
    query.where("i.id", id).first();

    const promises = [query, this.getInvoiceItems(id)]; // [ projects, actions ]

    return Promise.all(promises).then(function(results) {
      let [invoice, items] = results;

      if (invoice) {
        invoice.items = items;

        return mappers.invoiceToBody(invoice)
      } else {
        return null;
      }
    });
  }

  return query.then(invoices => {
    return invoices.map(invoice => mappers.invoiceToBody(invoice));
  });
}

// function findById(id) {
//   return invoiceDB("invoices").where({ id }).first();
// }



function add(invoices) {
  return invoiceDB("invoices")
    .insert(invoices)
    .then((ids) => ({ id: ids[0], message: 'new invoice created', invoices }));
}

function update(id, change) {
    return invoiceDB('invoices').where({ id }).update(change, '*').then((id) => ({id: id ,change}))
}

function remove(id) {
    return invoiceDB('invoices').where( {id}).del()
}


function getInvoiceItems(invoice_id) {
  return invoiceDB('items')
    .where("invoice_id", invoice_id)
    .then(items => items.map(item => mappers.itemToBody(item)))
}