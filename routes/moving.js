const express = require('express');
const router = express.Router();

//import controller
const { handleResponses } = require('../controlers');

router.post('/responses/:pag', handleResponses);

module.exports = router;