const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rubi#Data_01", // aquí va tu contraseña si tienes
    database:"ingeniatech009"
});

conexion.connect((error) => {
    if(error){
        console.log("Error de conexión");
        console.log(error);
    }else{
        console.log("Conectado a MySQL");
    }
});

module.exports = conexion;