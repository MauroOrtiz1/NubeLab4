const express = require('express');
const router = express.Router();

// Ruta de ejemplo para clientes
router.get('/', (req, res) => {
    res.send('Lista de clientes');
});

module.exports = router;
