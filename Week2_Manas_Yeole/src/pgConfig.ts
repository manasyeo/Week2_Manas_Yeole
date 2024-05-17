import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database : 'testorders',
    password : 'Manas@28',
    port : 5432,
})

export default pool;