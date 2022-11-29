import request from 'postman-request';
import chalk from 'chalk';
import config from '../config.js';

const Weather_KEY = config.Weather_KEY;

const forecast = (lat, lon, callback) => {
    const url =
        'http://api.openweathermap.org/data/2.5/weather?lat=' +
        lat +
        '&lon=' +
        lon +
        '&appid=' +
        Weather_KEY +
        '&units=metric';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback(
                chalk.red('Unable to connect to weather services!', undefined)
            );
        } else if (body.cod === '404') {
            callback(
                'Unable to find location. Try another weather search!',
                undefined
            );
        } else {
            const locationName = body.name;
            const description = body.weather[0].description;
            const humidity = body.main.humidity;
            const currentDegrees = body.main.temp;
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
