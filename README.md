# [Vacay Finder](https://vacayfinder.vercel.app/)

## Introduction
Vacay Finder is a website that guides users to their perfect travel destination. Vacay Finder has a user choose between cities they have enjoyed visiting or would like to visit and, using the selections of the user, predicts cities for their future travel plans! The website was built with next.js and ChakraUI, and the backend classification algorithm was built with Python and machine learning. We used MongoDB to store and accesss information about each city. While a lot of software exists to attempt to suggest great vacations, Vacay Finder is unique in the data it uses to suggest and predict vacations as well as the gamification aspect of Vacay Finder, simplifying the process to a few clicks of a button. 

### Some more technical details for those who care
- All the images were web-scraped using serpapi (that's why some images have watermarks or are low resolution)
- The classification algorithm works by comparing the similarity of two cities data using cosine similarity
- Huge shoutout to the author of this article for inspiration: https://medium.com/analytics-vidhya/city-recommender-system-with-python-part-2-finding-my-schitts-creek-da2f2cce2b5f

Team members: Vishruth Raj, Tanish Khadse, Yatin Gupta, Balaji Balachandran
