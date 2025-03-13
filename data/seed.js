import pkg from 'pg';
const { Pool } = pkg;

import pool from './database.js';

const sqlCommands = `
  CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    platform VARCHAR NOT NULL,
    genre VARCHAR NOT NULL,
    release VARCHAR NOT NULL
  );

  INSERT INTO games (title, platform, genre, release) VALUES
  ('Heavy Rain', 'PS4, PS3, Steam', 'Interactive film, Action-adventure game, Interactive fiction, Adventure', '2010'),
  ('Super Mario Party', 'Nintendo Switch', 'Party video game, Puzzle, Strategy video game, Shooter game, Music video game', '2018'),
  ('Fable', 'Xbox, Windows, Mac OS X, Xbox 360', 'Action, RPG', '2004'),
  ('Saints Row', 'PS4, PS5, Xbox X/S/One, Microsoft Windows, Google Stadia', 'Open world, Action-adventure game, Third-person shooter, Nonlinear gameplay, Adventure', '2022'),
  ('Fortnite', 'macOS, Windows, PS4, Xbox One, Nintendo Switch, Android, Xbox X/S, PS5', ' Interactive film, Action-adventure game, Interactive fiction, Adventure', '2010');
`;

pool.query(sqlCommands, (error) => {
  if (error) {
    console.error(error.message);
  }
  console.log('Hardcoded game database generated.');
});

export default pool;