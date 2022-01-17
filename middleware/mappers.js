module.exports = {
  intToBoolean,
  booleanToint,
  invoiceToBody,
  itemToBody,
};

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function booleanToint(bool) {
  return bool === true ? 1 : 0;
}

function invoiceToBody(invoice) {
  const result = {
    ...invoice,
    items: [],
  };

  if (invoice.items) {
    result.items = invoice.items.map(item => ({
      ...item,
    }));
  }

  return result;
}

function itemToBody(item) {
  return {
    ...item,
  };
}

// To use this mapper in a project model, below is a good example
