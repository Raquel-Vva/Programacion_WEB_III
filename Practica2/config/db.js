import mysql from "mysql2/promise";

//coneccion a base de datos mysql
export const db=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tienda',
    //si cambio de puerto
    port: 3306
});