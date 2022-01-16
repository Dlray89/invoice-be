const invoiceRouter = require('express').Router()





const invoicesModel = require('../models/invoice.model')

invoiceRouter.get('/', (req, res) => {
    invoicesModel
        .find()
        .then(invoicesModel => {
        res.status(200).json(invoicesModel)
    }).catch(err => {
        res.status(500).json({message: `${err}:  cannot find invoice`})
    })
})


invoiceRouter.post('', (req, res) => {
    const newInvoice = req.body
    invoicesModel.add(newInvoice).then(invoices => {
        res.status(200).send(invoices)
    })
        .catch(err => {
        res.status(500).json({ message: `${err}:Cannot create a new invoice`})
    })
})

module.exports = invoiceRouter