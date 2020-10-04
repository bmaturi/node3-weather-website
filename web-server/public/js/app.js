
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
const icon = document.getElementById("icon")

messageOne.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = ''
    messageTwo.textContent = ''

    if (!search) {
        console.log('Please enter a value for location')
        messageOne.textContent = 'Please enter a value for location'
    } else {
        fetch('/weather?address='+search.value).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    console.log(data.error)
                    messageOne.textContent = data.error
                } else {
                    messageOne.textContent = data.name
                    messageTwo.textContent = data.desc
                    icon.src = data.icon
                }
            })
        })
    }

})