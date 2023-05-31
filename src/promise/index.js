const promise = new Promise(function(resolve, reject) {
    resolve('Done!')
})

const cows = 15

const countCows = new Promise(function(resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`)
    } else {
        reject('There is no cows :(')
    }
})

countCows.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
}).finally(()=> {
    console.log("Finally")
})