const express = require('express');
const router = express.Router();

// Ruta de ejemplo para productos
router.get('/', (req, res) => {
    res.send('Lista de productos');
});

module.exports = router;
