import chalk from 'chalk';

import geocode from './utlis/geocode.js';
import forecast from './utlis/forecast.js';

const address = process.argv[2];

if (!address) {
    console.log(chalk.red('Please provide an address!'));
} else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log(error);
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }

            console.log(location);
            console.log(forecastData);
        });
    });
}
