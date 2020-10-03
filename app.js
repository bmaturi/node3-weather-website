const request = require('request')
const yargs = require('yargs')

// create the read command
yargs.command({
    command: 'weather',
    describe: 'Reading weather for a city',
    builder: {
        city: {
            describe: 'City',
            type: 'string',
            demandOption: true
        }
    },
    handler (argv) {
        //console.log(argv.city)
        const url = 'http://api.weatherstack.com/current?access_key=9cdabf197eefe2caac6901f294ed1646&query='+argv.city

        request(url, {json: true}, (err, response) => {
            // const data = JSON.parse(response.body)
            
            if (err) {
                console.log(err.toString())
            } else if (response.body.error) {
                console.log(response.body.error.info)
            } else {
                const current = response.body.current
                console.log(response.body.location.name + ' is ' +current.weather_descriptions[0]+'. It is currently '+current.temperature+' degrees outside. There is a '+current.precip+'% chance of rain.')
            }
        })
    }
})

yargs.parse()