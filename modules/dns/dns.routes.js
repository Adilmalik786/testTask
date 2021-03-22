const express = require('express');
const router = express();
const dnsCtrl = require('./controller/dns.controller');


router
    .route('/validateRecord')
    .post(dnsCtrl.validateDNSRecord);

module.exports = router;
