const request = require('request');

const forecast = (latitude, longitude, callback) => {
  
    const url = 'https://api.darksky.net/forecast/b048b0c145a457df474cf7a3ab8ddd6e/'
                  + latitude + ',' + longitude + '?units=si';
    
    request({ url, json: true}, (error, {body}) => {
     
    if (error) {
        callback('Unable to connect to weather services!', undefined);
    }

    else if (body.error) {
        callback('Unable to find location!', undefined);
    }

    else { 
        callback(undefined,{
            today: body.daily.data[0].summary + ' It is currently '
            + body.currently.temperature + ' degree celsius. There is ' + 
           body.currently.precipProbability + '% chances of rain..',
           week: body.daily.summary
        } );
    }
});

};

module.exports = forecast;