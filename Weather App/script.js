const button = document.getElementById('search-btn')
const input = document.getElementById('city-input')

const cityName = document.getElementById('cityName')
const country = document.getElementById('country')
const time = document.getElementById('time')
const temp_c = document.getElementById('temp_c')
const temp_f = document.getElementById('temp_f')
const lat = document.getElementById('lat')
const long = document.getElementById('long')

async function getData(name)
{
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=0136dab9b86a4aa5877104655250108&q=${name}&aqi=yes`)

    return await promise.json()
}

button.addEventListener('click', async () => {
    const value = input.value
    const result = await getData(value)
    
    cityName.innerText = `${result.location.name}, ${result.location.region}`
    country.innerText = result.location.country
    time.innerText = result.location.localtime
    temp_c.innerText = result.current.temp_c
    temp_f.innerText = result.current.temp_f
    lat.innerText = result.location.lat
    long.innerText = result.location.lon
})