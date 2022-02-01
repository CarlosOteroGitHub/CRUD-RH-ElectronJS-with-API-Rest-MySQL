//Proceso que realiza la conexión con base de datos MySQL.
const conexion = require('promise-mysql');

const connection = conexion.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'empleados_angular_db'
});

function  getConnection(){
	return connection;
}

module.exports = { getConnection };