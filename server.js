const dotenv = require('dotenv');

process.on('uncaughtException', err=>{
    console.log('UNCAUGHT Exception ! Shutting down ....');
    console.log(err.name, err.message);
        process.exit(1);        // need to crash the application : application needs to be restart
});

dotenv.config({path: './config.env'});
const app = require('./app');


// START SERVER
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));


process.on('unhandledRejection', err=>{
    console.log('UNHANDER REJECTION ! Shutting down ....');
    console.log(err.name, err.message);
    server.close(()=>{
        process.exit(1);            // optional
    });
});
