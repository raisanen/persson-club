const express = require('express');

const ensureHttps = require('../lib/middleware/ensure-https');

const router = express.Router();

router
    .use(ensureHttps)

    .get('/', async (req, res) => res.render('index'))
;

module.exports = router;
 