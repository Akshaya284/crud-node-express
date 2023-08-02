const express = require('express');
const router = express.Router();
const {getItem, addItem, findItem, updateItem, deleteItem } = require('../Controllers/item')


// To get all items 
router.get('/', getItem);

// To create an item 
router.post('/item', addItem);

// To find an item by id 
router.get('/:id', findItem);

// To edit an item by id 
router.put('/:id', updateItem);

// To delete an item 
router.delete("/:id", deleteItem);


module.exports = router;