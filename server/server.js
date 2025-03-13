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

// delete - by game id
app.delete('/games/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM games WHERE id = $1', [id]);
    res.json({ message: 'Game is deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Unable to delete the game' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
