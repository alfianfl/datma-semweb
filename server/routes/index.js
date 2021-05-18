const express = require('express');
const router = express.Router();
const datmaController = require('../controllers/DatmaController');

router.get('/datma', datmaController.getMahasiswa);
router.get('/datma/:npm', datmaController.getMahasiswa);

module.exports = router;