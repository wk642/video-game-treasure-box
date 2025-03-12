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
  - [ ] Tailwind
  - [ ] HTML
  - [ ] CSS
  - [ ] JavaScript
## DEMO <a name="demo"></a>
## HOW TO RUN THIS PROJECT <a name="run"></a>
1. Clonet this project by using    
` git clone https://github.com/wk642/video-game-treasure-box.git`
2. Open up the project and then install npm  
` npm install `
## MY JOURNEY <a name="journey"></a>
This project was originally EVENTONICA, which was going to diaplying, adding, updating, deleting events. Instead I have a passion for video games, so I decided to put a little twist on it. 

#### Planning process
1. Components:
- App.js - main frame
- GameList.js - displays the games
- GameCard.js - display each game
- GameDetails.js - display the details of the games
- GameForm.js - form to allow user to add
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
  