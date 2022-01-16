exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("invoices")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("invoices").insert([
        {
          id: 1,
          clientName: "David Ray",
          clientEmail: "dave@gmail.com",
          description: "Front-End Developer",
          invoiceDate: "01/25/2022",
          status: false,
          senderStreet: "123 main",
          senderCity: "Knoxville",
          senderState: "TN",
          senderZipcode: "37918",
          total: 200,
          paymentDue: '03/20/2022',
          paymentTerms: 24,
          clientStreet: "234 main",
          clientCity: "Knoxville",
          clientState: "TN",
          clientZipcode: "37918",
        },
      ]);
    });
};
