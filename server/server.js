import express from 'express';
import cors from 'cors';
import pool from '../data/database.js';
const app = express();
const port = 5000; 

app.use(cors());
app.use(express.json());

// testing to make sure it connects to back end
app.get('/', (req, res) => {
  res.json("Welcome! back end to video gamet treasure box is connected");
});

// getting all the games
app.get('/games', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM games');
    res.json(result.rows);
  } catch (error) {
    console.error('Unable to get all games: ', error);
    res.status(500).json({ message: 'Unable to get all the games' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
