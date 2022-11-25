import request from 'postman-request';
import chalk from 'chalk';
import config from '../config.js';

const GEO_KEY = config.GEO_KEY;

export const geocode = (address, callback) => {
    const geourl =
        'http://api.positionstack.com/v1/forward?access_key=' +
        GEO_KEY +
        '&query=' +
        address +
        '&limit=1';

    request({ url: geourl, json: true }, (error, response) => {
        if (error) {
            callback(
                chalk.red('Unable to connect to location services!', undefined)
            );
        } else if (response.body === undefined) {
            callback(
                chalk.red(
                    'Unable to find location, Try another position search!',
                    undefined
                )
            );
        } else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: response.body.data[0].name,
            });
        }
    });
};

export default geocode;
