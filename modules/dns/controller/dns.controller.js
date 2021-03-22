const catchAsync = require('../../../utils/catchAsync');
const AppError = require('../../../utils/appError');
const  dns = require('dns');

exports.validateDNSRecord = catchAsync(async (req,res,next)=>{
    
    // records of DNS
    const records= req.body.records.split(',');

    records.map(record =>{
        dns.reverse(record, function (err, hostnames) {
            if (err) {
                res.status(500).json({
                    status: 'Error',
                   
                });
            }
         });  
    });
   
    res.status(200).json({
        status: 'Succcess',
       
    });

    

});
