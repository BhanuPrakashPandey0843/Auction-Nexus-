const { Pool } = require('pg'); 

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Bhanu0843', // change password 
    port: 5432,
    database: 'for_log_in_auction',
});



module.exports = pool;