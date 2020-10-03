console.log('Client side JS file is loaded')

/*
fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})*/

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Form Submitted : '+search.value)
    messageOne.textContent = ''
    messageTwo.textContent = ''

    if (!search) {
        console.log('Please enter a value for location')
        messageOne.textContent = 'Please enter a value for location'

    } else {
        fetch('http://localhost:3000/weather?address='+search.value).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    console.log(data.error)
                    messageOne.textContent = data.error
                } else {
                    console.log(data)
                    messageOne.textContent = data.name
                    messageTwo.textContent = data.desc
                }
            })
        })
    }

})