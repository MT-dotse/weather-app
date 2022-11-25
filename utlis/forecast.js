import request from 'postman-request';
import chalk from 'chalk';
import config from '../config.js';

const Weather_KEY = config.Weather_KEY;

const forecast = (address, callback) => {
    const url =
        'http://api.openweathermap.org/data/2.5/weather?q=' +
        address +
        '&units=metric&APPID=' +
        Weather_KEY;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(
                chalk.red('Unable to connect to weather services!', undefined)
            );
        } else if (response.body.cod === '404') {
            callback(
                chalk.red(
                    'Unable to find location. Try another weather search!',
                    undefined
                )
            );
        } else {
            const locationName = response.body.name;
            const description = response.body.weather[0].description;
            const humidity = response.body.main.humidity;
            const currentDegrees = response.body.main.temp;
            callback(
                undefined,
                `It is currently ${currentDegrees} degrees with ${description} in ${chalk.green.inverse.bold(
                    locationName
                )}, and a humidity of ${humidity}.`
            );
        }
    });
};

export default forecast;
