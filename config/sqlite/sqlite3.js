  
import SQLite from "react-native-sqlite-storage"

class SQLite3 {
    constructor() {
        SQLite.DEBUG(true)
        SQLite.enablePromise(true)
        this.conn = SQLite.openDatabase("album.db", "1.0", "Test Database", 200000, this.openConn, this.errorConn)
        this.runQuery("create table if not exists album(id integer primary key, albumId integer, title text)", [])
            .finally(() => {
                this.runQuery("insert into album values (?, ?, ?)", ["1", "1", "ini album saya"])
                    .then(() => console.info("Successfully insert default album!!"))
                    .catch(err => console.info("Default Album already Exists: "))
            })
    }

    openConn = () => {
        console.log("SQLite Database opened!!");
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