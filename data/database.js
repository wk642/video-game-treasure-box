import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'videogametreasurebox',
  host: 'localhost',
  database: 'videogametreasureboxdb',
  password: 'videogames',
  port: 5432, 
});

export default pool;