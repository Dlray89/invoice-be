const invoiceRouter = require('express').Router()
const cors = require('cors')




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



invoiceRouter.get('/:id', cors(), (req, res) => {
    const { id } = req.params
    invoicesModel.findById(id).then(invoice => {
        res.status(200).json(invoice)
    }).catch(err => {
        res.status(500).json({message: "Can't find ID of invoice"})
    })
})


invoiceRouter.get('/:id/items', (req, res) => {
    const { id } = req.params
    
    invoicesModel.getInvoiceItems(id).then(items => {
        res.status(200).json(items)
    }).catch(err => {
        res.status(500).json({message: `${err}: error has occured`})
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

invoiceRouter.put('/:id', cors(), (req, res) => {
    const { id } = req.params
    const changes = req.body
    invoicesModel.update(id, changes).then(changes => {
        res.status(200).json(changes)
    }).catch(err => {
        res.status(500).json({message: `cannot update: ${err}`})
    })
})


invoiceRouter.delete('/:id', (req, res) => {
    const { id } = req.params

    invoicesModel.remove(id)
        .then(deleteInvoice => {
        res.status(200).json(deleteInvoice)
        }).catch(err => {
        res.status(500).json({ message: `Could not delete your invoice: ${err}`})
    })
})

module.exports = invoiceRouter