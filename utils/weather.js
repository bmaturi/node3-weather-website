const request = require('request')

const getCurrentWeather = (city_name = 'Hyderabad', callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9cdabf197eefe2caac6901f294ed1646&query='+city_name

    request(url, {json: true}, (err, response) => {
        if (err) {
            callback(err.toString(), undefined)
        } else if (response.body.error) {
            callback(response.body.error.info, undefined)
        } else {
            const current = response.body.current
            callback(undefined, {
                name: response.body.location.name,
                desc: current.weather_descriptions[0],
                temperature: current.temperature,
                precip: current.precip,
                icon: current.weather_icons[0]
            })
        }
    })
}

module.exports = {
    getCurrentWeather: getCurrentWeather
}