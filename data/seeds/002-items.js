exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          invoice_Id: 1,
          itemName: "Logo Design",
          QTY: 2,
          Price: 82,
          total: 164
        },
     ]);
    });
};
