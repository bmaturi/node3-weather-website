/*
setTimeout(() => {
    console.log('2 seconds later')
}, 2000)

const names = ['Bharath','Mrinalini','Riya']
const shortNames = names.filter((name) => name.length <= 4)

console.log(shortNames)

const city_info = (city, callback) => {
    setTimeout(() => {
        const data = {
            name: 'Melbourne'
        }

        callback(data)
    }, 2000)
}

city_info('New York', (data) => {
    console.log(data)
})
*/

// Challenge

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})



