# Vacay Finder

## Introduction
Vacay Finder is a website that guides users to their perfect travel destination. Vacay Finder has a user choose between cities they have enjoyed visiting or would like to visit and, using the selections of the user, predicts cities for their future travel plans! The website was built with next.js and ChakraUI, and the backend classification algorithm was built with Python and machine learning. The database of cities with corresponding images, names, weather data, etc. utilized MongoDB to host the database. While a lot of software exists to attempt to suggest great vacations, Vacay Finder is unique in the data it uses to suggest and predict vacations as well as the gamification aspect of Vacay Finder, simplifying the process to a few clicks of a button. 

![image](https://user-images.githubusercontent.com/109255110/234996109-721b1ec2-fb44-42ed-9a93-694b5d2378d2.png)


## Instructions
Prerequisites:

Next.js

Flask



To run frontend:

```
cd vacay-finder
npm run dev
```

To run backend:

Set up db connection:

1. Create a new db user on MongoDB Atlas and copy your password.
2. Add your username and password to api/private/credentials.py

```
cd api
```

Start up the python virtual environment.

```
flask --app server run
```

## Group Members and Roles

Vishruth - Created and fine-tuned the classification algorithm for predicting cities and set up database

Tanish - Designed a webscraper to scrape images of cities from the web and weather data 

Yatin - Designed web pages using Next.js and handled integration of backend calls and displaying results

Balaji - Primarily worked on the frontend using Next.js and javascript functionality to preprocess data
