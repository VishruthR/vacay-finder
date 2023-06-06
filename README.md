# Vacay Finder

## Introduction
Vacay Finder is a website that guides users to their perfect travel destination. Vacay Finder has a user choose between cities they have enjoyed visiting or would like to visit and, using the selections of the user, predicts cities for their future travel plans! The website was built with next.js and ChakraUI, and the backend classification algorithm was built with Python and machine learning. The database of cities with corresponding images, names, weather data, etc. utilized MongoDB to host the database. While a lot of software exists to attempt to suggest great vacations, Vacay Finder is unique in the data it uses to suggest and predict vacations as well as the gamification aspect of Vacay Finder, simplifying the process to a few clicks of a button. 


## Technical Architecture

![image](https://user-images.githubusercontent.com/109255110/234996109-721b1ec2-fb44-42ed-9a93-694b5d2378d2.png)

### Frontend
Role: The frontend allows a user to interact with our product. It consists of three screens: The homepage, a screen to pick between potential vacation spots, and the vacation recommendation page. The home page just allows you to begin the game by clicking the get started button. Then you are able to pick between 5 pairs of vacation spots. Based on these selections, you are given three cities as your recommended vacation spots.

Technologies used: Javascript, NextJS, React, Chakra UI

Who built: Balaji worked on implementing the designs into the frontend. Yatin worked on integrating the backend with the frontend.

Interactions with other components: The frontend primarily reacts with the backend by communicating which information it needs and the backend then provides that information to the frontend.

### Backend
Role: The backend exposes a couple different endpoints to help the frontend interact with the other components in the app. These endpoints include getting random and specificied city data and making predictions based on past city choices.

Technologies used: Python, Flask, PyMongo

Who built: Vishruth worked on setting up the endpoints for the backend.
 
Interactions with other components: The backend helps connect all the components in a clean way. The backend sends data to the frontend based on results from the model and database. It also helps populate the database using results from the web scraper.

### Model
Role: The model is used for making recommendations to the user based on the selections the user made.

Technologies used: Python, Flask, Jupyter, Scikit

Who built: Vishruth built the model. Tanish helped collect data for the model.
 
Interactions with other components: The uses the cities picked by the user on the frontend and sends a list of recommended cities to the backend.


### Web Scraper
Role: The web scraper is used to collect images to be displayed on the website.

Technologies used: Python, Serpapi

Who built: Tanish and Vishruth worked together to build the web scraper.
 
Interactions with other components: The web scraper collects images and writes them to a file. The backend then parses through this file and adds these images to the db for their respective cities.

### Database
Role: The database holds information for 300 cities. This information includes the city name, an image of the city, and data about the city for the model to make a prediction.

Technologies used: MongoDB

Who built: The database was populated using endpoints written by Vishruth.
 
Interactions with other components: The database interacts with the backend which then sends information to the model and frontend.

## Instructions
First clone the repository using git clone.

To run frontend:

```
cd vacay-finder
npm i
npm run dev
```

To run backend:

Set up db connection:

1. Create a new db user on MongoDB Atlas and copy your password.
2. Add your username and password to api/private/credentials.py

```
cd api
pip install -r requirements.txt
```

Start up the python virtual environment.

```
flask --app server run
```

The app should be ready to run!

## Group Members and Roles

Vishruth - Created and fine-tuned the classification algorithm for predicting cities and set up database

Tanish - Designed a webscraper to scrape images of cities from the web and weather data 

Yatin - Designed web pages using Next.js and handled integration of backend calls and displaying results

Balaji - Primarily worked on the frontend using Next.js and javascript functionality to preprocess data
