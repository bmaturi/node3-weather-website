const weather = require('./utils/weather.js')

const getMyWeather = (city_name) => {
    weather.getCurrentWeather(city_name, (err, {name, desc, temperature, precip}) => {
        if (err) {
            console.log('Error',err)
        } else {
            console.log(name + ' is ' +desc+'. It is currently '+temperature+' degrees outside. There is a '+precip+'% chance of rain.')
        }
    })
}

getMyWeather('Melbourne')
getMyWeather('New York')
getMyWeather('Hyderabad')
