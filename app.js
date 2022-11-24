//import chalk from 'chalk';
//const request = require('postman-request');
const geocode = require('./utlis/geocode.js');
const forecast = require('./utlis/forecast.js');

geocode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});

forecast('Nicosia, Cypress', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});
