var db = require ('./db-config');

  let sql = `INSERT INTO daftar_karyawan (name,	description,	division,	age,	gender)
  VALUES ("Sarada", "lorem ipsum bla bla bal", "Genin", 14, "female")`;


db.query(sql, (err,results)=>{
  if(err) throw err;
  console.log("1 record tersimpan");
});