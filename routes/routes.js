const express = require('express');
const router = express.Router();
const dnsRoute = require('../modules/dns/dns.routes');

// GET status.
router.get('/health-check', function (req, res, next) {
    res.send('Server is OK');
});

router.use('/', dnsRoute);

module.exports = router;
