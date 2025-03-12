CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  platform VARCHAR(100) NOT NULL,
  genre VARCHAR(100) NOT NULL,
  release_year DATE,
  info TEXT,
  -- image_url byTea coming back to this, need to do more research if I'm using byTea
);