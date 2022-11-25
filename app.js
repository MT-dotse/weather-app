import geocode from './utlis/geocode.js';
import forecast from './utlis/forecast.js';

geocode('Amman', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});

forecast('Amman, Jordan', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});
