import mysql from "mysql2/promise";

export default async function conectar(){
  
  if(global.poolConexoes){
    return await global.poolConexoes.getConnection();
  }
  else{
    global.poolConexoes = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "LeonardoNogueira123*",
      database: "achadosperdidos",
      waitForConnections: true,
      connectionLimit: 10,
      maxIdle: 10,
      idleTimeout: 60000,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });
    return await global.poolConexoes.getConnection();
  }
}