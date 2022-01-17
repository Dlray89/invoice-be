const router = require("express").Router();

const itemsModel = require("../models/items.model");

router.get("/", (req, res) => {
  itemsModel
    .find()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(500).json({ message: `${err}` });
    });
});

router.post("/", (req, res) => {
  const newItem = req.body;
  itemsModel
    .add(newItem)
    .then((newItem) => {
      res.status(200).json(newItem);
    })
    .catch((err) => {
      res.status(500).json({ messahe: `${err}` });
    });
});

module.exports = router;
