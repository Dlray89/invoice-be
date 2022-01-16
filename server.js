const express = require("express");
const cors = require("cors");
const morgan = require('morgan')
const helmet = require('helmet')



const invoiceRouter = require('./routers/invoice.router')

const invoiceApp= express()

invoiceApp.use(helmet())
invoiceApp.use(morgan('dev'))
invoiceApp.use(express.json())
invoiceApp.use(cors());

invoiceApp.use('/api/invoices', invoiceRouter)


invoiceApp.get("/", (req, res) => {
  res.send({ message: "Hello from the server" });
});

const PORT = process.env.PORT || 8080

invoiceApp.listen(PORT, (req, res) => {
  console.log("Server is up and running on localhost:8080");
});
