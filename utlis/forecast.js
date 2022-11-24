const request = require('postman-request');
const config = require('../config.js');
const Weather_KEY = config.Weather_KEY;

const forecast = (address, callback) => {
    const url =
        'http://api.openweathermap.org/data/2.5/weather?q=' +
        address +
        '&units=metric&APPID=' +
        Weather_KEY;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services', undefined);
        } else if (response.body.error) {
            callback('Unable to find location. Try another search!', undefined);
        } else {
            const locationName = response.body.name;
            const currentDegrees = response.body.main.temp;
            const description = response.body.weather[0].description;
            const feelsLike = response.body.main.feels_like;

            callback(
                undefined,
                `In ${locationName} it is currently ${currentDegrees} degrees with ${description}, and it feels like ${feelsLike} degrees out.`
            );
        }
    });
};

module.exports = forecast;
