# Getting Started with Create React App

Install Node.js and npm
Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install Node.js from the official Node.js website (https://nodejs.org/). npm is included with Node.js, so you don't need to install it separately.

Install Create React App
Create React App is an officially supported way to create new React applications. You can install Create React App globally on your machine by running the following command in your terminal:

npm install -g create-react-app

This will install Create React App globally so that you can use it to create new React apps.

Create a New React App
Once Create React App is installed, you can use it to create a new React app by running the following command in your terminal:

create-react-app my-app

Navigate to the App Directory
After the new React app is created, navigate to the app directory using the cd command. 

The app directory is "my-app"

The command is cd my-app

Start the Development Server
Once you are inside the app directory, you can start the development server by running the following command:

npm start

This will start the development server and open your React app in your default web browser. 

You will need to install Axios, SASS, and FontAwesome.

Axios with "npm install axios".
SASS with "npm install sass".
FontAwesome with "npm i --save @fortawesome/fontawesome-svg-core"
                 "npm install --save @fortawesome/free-solid-svg-icons"
                 "npm install --save @fortawesome/react-fontawesome".
                 
The application uses geolocation and you must allow location access from the browser, there is an icon next to the web page address.

On the first run, the application displays your location data. Data such as city name, country, temperature, humidity, wind strength, minimum and maximum temperature.
You can search for others locations in the input, and your search history will be displayed besides the search input. The search history will display the name of the location searched, the weather icon, and the temperature.

You can add your favorite location to a list by clicking the "Add to favorite" button.

Each location you are looking for will also be shown with weather data for 5 days.
You can toggle through dark and light theme by clicking the button in the navbar.
The app is mobile responsive so you can use it even on mobile devices.
