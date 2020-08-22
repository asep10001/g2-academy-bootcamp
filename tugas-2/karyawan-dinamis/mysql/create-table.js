var db = require('./db-config')

let sql = `CREATE TABLE NmMApBVao4.daftar_karyawan
            ( id INT NOT NULL AUTO_INCREMENT, name TEXT NOT NULL , description TEXT NOT NULL , division TEXT NOT NULL, age INT NOT NULL, gender TEXT NOT NULL,PRIMARY KEY(id) )
            ENGINE = InnoDB`;

// `CREATE TABLE NmMApBVao4.category_tb
// ( id INT NOT NULL AUTO_INCREMENT, name TEXT NOT NULL,
// PRIMARY KEY(id) )
// ENGINE = InnoDB`;

db.query(sql, (err, results)=>{
  if (err) throw err;
  console.log("Table created")
});