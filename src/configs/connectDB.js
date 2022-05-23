// import mysql from 'mysql2';
import mysql from 'mysql2/promise';

// local
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ridanode'
});

export default connection;