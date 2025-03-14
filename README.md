#  VIDEO GAME TREASURE BOX
##  TABLE OF CONTENTS
1. [OBJECTIVES](#objective)
2. [PREREQUISITES](#prerequisites)
3. [DEMO](#demo)
4. [HOW TO RUN THIS PROJECT](#run)
5. [MY JOURNEY](#journey)
## OBJECTIVES <a name="objective"></a>
## PREREQUISITES <a name="prequisites"></a>
  - [ ] Vite
  - [ ] PSQL
  - [ ] [Tailwind](https://tailwindcss.com/docs/installation/using-vite)
  - [ ] HTML
  - [ ] CSS
  - [ ] JavaScript
## DEMO <a name="demo"></a>
## HOW TO RUN THIS PROJECT <a name="run"></a>
`npm install express cors pg tailwinds`
1. Clonet this project by using    
` git clone https://github.com/wk642/video-game-treasure-box.git`
2. Open up the project and then install npm  
` npm install `
3. To run this project concurrently:  
` npm run dev `
If you onlly run npm run dev, there will be no games initally in your database. To add a couple of games with my template use 
` npm run seed ` (This step should only be used when initiallizing the app or when there is none in there and you want to add something. Or else you will get the repeated five games over and over again)
To run just the front end:
` npm run client `
To  run just the back end:
` npm run server `
## INSTALLING LOCAL DATABASE
In terminal, create database
` CREATE DATABASE videogametreasureboxdb;`
Create a user
``` 
CREATE USER videogametreasurebox WITH PASSWORD 'videogames';
GRANT ALL PRIVILEGES ON DATABASE videogametreasureboxdb TO videogametreasurebox;
```
## MY JOURNEY <a name="journey"></a>
This project was originally EVENTONICA, which was going to diaplying, adding, updating, deleting events. Instead I have a passion for video games, so I decided to put a little twist on it. 

#### Planning process
1. Components:
- App.js - main frame
- GameList.js - displays the games
- GameCard.js - display each game
- GameDetails.js - display the details of the games
- AddGameForm.js - form to allow user to add
- SearchBar.js - search functionality.
- Filter.js - to filter games by genre, name, or  year, or favorited (maybe goes with search bar).

2. Database Schema:  
Table Name : games   
id - serieal primary key  
title - VARCHAR  
platform - VARCHAR  
genre - VARCHAR  
release - VARCHAR / DATE  
description - text  
image 

3. Endpoints:
- GET: 
  - /games - Get all games.  
  - /games/:id - Get a specific game by ID. 
  - Search games by title.
  - Filter games by 
    - genre 
    - platform
    - year
- POST
  - Add a new game.  
- PUT 
  - Update an existing game.  
- DELETE 
  - Delete a game. 

SPIKE DOC:
- find out how to store images
  - from api
  - local storage
  - web scraping
  