const moment = require('moment');
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`); //protocol gives http, host gives URL, 
    next();
}

module.exports = logger;