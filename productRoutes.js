// productRoutes.js
const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getProducts);

module.exports = router;