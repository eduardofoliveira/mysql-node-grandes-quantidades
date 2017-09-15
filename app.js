const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'duduhouse.dyndns.info',
    user: 'prepago',
    password: '190790edu',
    database: 'prepago'
});

connection.connect((error) => {
    console.log('conectado');
    const query = connection.query('select * from cdr limit 10');
    query.on('result', (row) => {
        connection.pause();
        setTimeout(() => {
            console.log(row);
            connection.resume();
        }, 300); 
    });
    query.on('end', () => connection.end());
});