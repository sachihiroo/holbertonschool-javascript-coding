#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.error(error);
    return;
  }

  // Parse the JSON response
  const movieData = JSON.parse(body);
  console.log(movieData.title);
});
