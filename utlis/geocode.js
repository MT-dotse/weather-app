import request from 'postman-request';
import chalk from 'chalk';
import config from '../config.js';

const GEO_KEY = config.GEO_KEY;

export const geocode = (address, callback) => {
    const url =
        'http://api.positionstack.com/v1/forward?access_key=' +
        GEO_KEY +
        '&query=' +
        address +
        '&limit=1';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback(
                chalk.red('Unable to connect to location services!', undefined)
            );
        } else if (body.data === undefined) {
            callback(
                chalk.red(
                    'Unable to find location, Try another position search!',
                    undefined
                )
            );
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label,
            });
        }
    });
};

export default geocode;
