import { Pool } from "pg";

const pool = new Pool({
     user :'postgres',
     host : "localhost",
     database : "crud_db",
     password : "fff!swo...2.o",
     port : "5432"
})


export default pool