const express = require('express');
const router = express.Router();

//import controller
const { handleStatics } = require('../controlers');

router.get('/statics/:pag', handleStatics);

module.exports = router;