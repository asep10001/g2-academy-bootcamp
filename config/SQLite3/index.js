import SQLite from "react-native-sqlite-storage"

class SQLite3{
    constructor(){
        SQLite.DEBUG(true)
        SQLite.enablePromise(true)
        this.conn = SQLite.openDatabase("laundry.db", "1.0", "Test Database", 200000, this.openConn, this.errorConn)
        this.runQuery("create table if not exists user(id integer primary key, username text, alamat text)", [])
        this.runQuery("create table if not exists orders(id integer primary key, userId integer, item_weigh integer, cost integer, services text, duration integer)", [])
            .finally(()=>{
            this.runQuery("insert into user values (?, ?, ?)", ["1", "asep", "lebak bulus"])
            this.runQuery("insert into orders values (?, ?, ?, ?, ?, ?)", ["1", "1", "2", "2000", "reguler", "3"])
                .then(()=> console.info("Successfully insert default user and order!!"))
                .catch(err => console.info("Default User and Orders already Exists! "))
            })

    }

    openConn = () => {
        console.log("SQLite Database opened!!")
    }

    errorConn = (e) => {
        console.error("Error SQLite: ", err);
    }

    runQuery = (query, params) => {
        return this.conn
        .then((tx) => {
            return tx.executeSql(query, params)
        })
    }
}

export default SQLite3