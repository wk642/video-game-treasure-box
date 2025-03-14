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

// getting all the games in else, but serach is also in here for titles
app.get('/games', async (req, res) => {
  try {
    let { title } = req.query; 
    let result;
    if (title) {
      result = await pool.query(
        // had to add wildcards to work for this so that it doesn't wait for the exact title and case does matter, so I just made it all uppercase 
        'SELECT * FROM games WHERE UPPER(title) LIKE UPPER($1)', [`%${title}%`]
      );
    }else {
      result = await pool.query('SELECT * FROM games');
    }
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
    await pool.query('DELETE FROM games WHERE id = $1', [id]);
    res.json({ message: 'Game is deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Unable to delete the game' });
  }
});

// add a game
app.post('/games', async (req, res) => {
  try {
    const { title, platform, genre, release } = req.body;
    await pool.query('INSERT INTO games (title, platform, genre, release) VALUES ($1, $2, $3, $4)', [title, platform, genre, release]);
    res.json({ message: 'Game added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Unable to add the game' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
