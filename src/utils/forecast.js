const request = require ('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=efcd31d3e88d33dda87ea77b22f75f21&query=' + latitude +','+ longitude
    
    request ({url, json : true}, (error,{body})=>{
        if(error){
            callback("Couldn't connect to weather app", undefined )
        } else if (body.error) {
            callback("Check your location", undefined)
        } else {
            callback(undefined, `The temperature is ${body.current.temperature} degree Celsius`)
        }
    })
}

module.exports = forecast