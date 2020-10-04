const express = require('express')
const path = require('path')
const weather = require('../..//utils/weather.js')
const hbs = require('hbs')

const app = express()

// if exists use env or default 3000
const port = process.env.PORT || 3000

/*console.log(__dirname)
console.log(__filename)

console.log(path.join(__dirname, '..', 'public'))*/

// Define path for express config
const publicDirPath = path.join(__dirname, '..', 'public')
const viewsPath = path.join(__dirname, '..', 'templates', 'views')
const partialsPath = path.join(__dirname, '..', 'templates', 'partials')




// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static dir to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Bharath Maturi'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Bharath Maturi'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page!!',
        name: 'Bharath Maturi'
    })
})

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    console.log(req.query.address)
    weather.getCurrentWeather(req.query.address, (err, data) => {
        if (err) {
            res.send({
                error : err
            })
        } else {
            res.send(data)
        }
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
       return res.send({
            error: 'You must provide a search term.'
        })
    }
    console.log(req.query.search)
    res.send({
        products : []
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        title: '404',
        name: 'Bharath Maturi'
    })
})

app.listen(port, () => {
    console.log('Server is up on port : '+port)
})