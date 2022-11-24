const request = require('postman-request');
const config = require('../config.js');
const GEO_KEY = config.GEO_KEY;

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=';
    GEO_KEY + '&query=' + address + '&limit=1';

    request({ url: url, json: true }, (error, response) => {
        console.log(response.body.data);

        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (response.body.data === undefined) {
            callback('Unable to find location, try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: response.body.data[0].name,
            });
        }
    });
};

module.exports = geocode;
