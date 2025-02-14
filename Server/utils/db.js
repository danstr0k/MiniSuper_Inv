import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "minisuper"
});

con.connect(function(err) {
    if(err) {
        console.log("Conexion erronea", err);
    } else {
        console.log("Conexion exitosa");
    }
});

export default con;