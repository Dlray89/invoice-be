const itemDB = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
    update,
    remove,
};

function find() {
  return itemDB("items");
}

function findById(id) {
  return itemDB("items").where({ id }).first();
}

function add(item) {
  return itemDB("items")
    .insert(item, "id")
    .then((ids) => ({ ids: ids[0], item }));
}

function update(id, change ) {
    return itemDB('items')
    .where({id}).update(change, '*')
}


function remove(id) {
    return itemDB('items')
    .where({id}).del()
}