// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// Edit this connection to make it work with JawsDB.
var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "yankeesny2",
        database: "starwars"
    },
    jawsDB: {
            // TODO: Add your JawsDB connection info here
        port: 3306,
        host: 'nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: ' b7ztszlkrxei4fei',
        password: "xf95m7zrql9s5xut",
        database: "starwars"

    }
}


// TODO: connect your jawsDB connection witht he mysql connection.
var connection = mysql.createConnection( source.jawsDB);



// Replace the connection code here with one to connect to you JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;