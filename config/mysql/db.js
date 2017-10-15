module.exports = function () {
    var mysql = require('mysql');
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '111111',
        database: 'nodesession'
    });
    conn.connect();
    return conn;
}