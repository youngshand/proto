# Prototype boilerplate
This is a simple Express generator using Jade Templates to rapidly prototype sites with the required stylesheets.

## Installation
Clone this repo and run `npm install`. If you haven't done so already install Jade locally `sudo npm install jade --global`. 

## BrowserSync
This repo also uses BrowserSymnc, which means you can load the url it supplies into any device on the same network to test and also offer QA. Install this globally using `sudo npm install browser-sync --global` 

## Watching files
To start the server run `npm start`. This will create 2 things; firstly an instance of NodeMon and secondly an instance of sass-watch which watches `/public/stylesheets/main.scss` and compiles to `/public/stylesheets/main.css`.

## Compiling to HTML
Once you're happy with your prototypes you'll want to compile them down to HTML so you can import them into your projects. Do this by running `npm run compile`.

## CSS
This template comes with some Bootstrap. It is an internal requirement to use Bootstrap for all projects. Please use it in it's entirety.

It also contains a number of Object Oriented CSS (OOCSS) declarations, called inside the file _oocss.scss, please also try and make the most of these where possible. 

## Any additions or updates, please create a pull request.