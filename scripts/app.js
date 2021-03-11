const cityForm = document.querySelector('#weather-form');
const weatherImg = document.querySelector('.icon img');
const temperature = document.querySelector('.temperature span');
const weatherCard = document.querySelector('.weather-card');
const cityName = document.querySelector('.city-name')


const getWeatherDets = async(userInput) => {

    const locID = await getCity(userInput);
    const weather = await getWeather(locID);

    return weather;
}

const updateUI = (data,nameCity) => {

    //updating the image to daytime or nightime
    if(data.IsDayTime){
        weatherImg.setAttribute('src','sun.png');
    } else {
        weatherImg.setAttribute('src','moon.png');
    }

    //Update city name
    cityName.textContent = nameCity.toLowerCase();

    //updating the temperature
    temperature.textContent = data.Temperature.Metric.Value;

    //hides UI if first time user is on page
    if(weatherCard.classList.contains('d-none')){
        weatherCard.classList.remove('d-none');
    }

    console.log(data);
};


cityForm.addEventListener('submit', e =>{

    e.preventDefault();

    const userInput = cityForm.userInput.value.trim();

    getWeatherDets(userInput)
        .then(data => updateUI(data[0],userInput))
        .catch(err => console.log(err));
    
        cityForm.reset();

    

});