# Weightlifting/Cardio Workout Tracker

![fitness-tracker-demo](./demos/fitness-tracker-demo.gif)

## Overview
In this exercise, the user uses a NoSQL database, specifically, MongoDB to create an application that tracks workouts, consisting of resistance and/or cardio training over a period of a week. Given a public folder, filled with HTML, CSS, and JS, a server script, models, and router routes are needed to complete the exercise. The application is then deployed on Heroku, using MongoDB Atlas to store user data.

## Table of Contents  
1. [Pseudocode](#pseudocode)  
2. [Installation](#installation) 
3. [Usage](#usage) 
4. [Links](#links)

## Pseudocode
1. Setup models with appropriate property names and types.
2. Setup a server script and server routes.
3. Setup api routes to give the server functionality.
4. GET, POST, PUT methods to match the method requests in the 'api' script in public.
5. Use ```aggregate``` and create a pipeline that returns the value of total duration of workout, using ```$sum```.

## Installation
-  ```npm i```

## Usage
- ```npm run seed``` to seed the database.
- ```npm run start``` to start the server.

## Resources
- [Mongoose](https://mongoosejs.com/docs/)
- [Aggregatation](https://masteringjs.io/tutorials/mongoose/aggregate)
- [MongoDB Atlas](https://docs.atlas.mongodb.com/)

## Links
- [Repository](https://github.com/huirayj/workout-tracker)
- [Deployed Site](https://workout-tracker-huirayj.herokuapp.com/)



