import { processWeatherData } from "./services";
import { farenheitToCelsius, slideToggle } from "./utils";

export function setupButtonListener(buttonId) {
    const weatherBtn = document.getElementById(buttonId);
    const userInput = document.getElementById('location-input');

    weatherBtn.addEventListener('click', () => {
        const inputValue = userInput.value;
        displayWeather(inputValue.toString());
    })
}

export async function displayWeather(location) {
    const weather = await processWeatherData(location);
    const infoContainer = document.querySelector('.weather-info-card');
    infoContainer.textContent = '';

    const city = document.createElement('h2');
    city.classList.add('city-name');
    city.textContent = weather.city;
    
    const dateObject = new Date(weather.timestamp);
    const dateText = dateObject.toLocaleString('en-us', 
        {hour12: true, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'});
    const dateElement = document.createElement('h3');
    dateElement.classList.add('date');
    dateElement.textContent = dateText;

    const tempContainer = document.createElement('div');
    tempContainer.className = 'temp-container';
    const tempTextBox = document.createElement('div');
    tempTextBox.className = 'temp-text-box';
    const temp = document.createElement('span');
    temp.id = 'temp';
    temp.textContent = weather.temp;
    const tempScale = document.createElement('span');
    tempScale.id = 'temp-scale';
    tempScale.textContent = ' °F'
    console.log(farenheitToCelsius(weather.temp))
    const tempToggleBox = document.createElement('label');
    tempToggleBox.classList.add('toggle-box');
    tempToggleBox.for = 'checkbox';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    const circle = document.createElement('div');
    circle.className = 'circle';
    const fScale = document.createElement('span');
    fScale.id = 'f-scale';
    fScale.textContent = '°F';
    const cScale = document.createElement('span');
    cScale.id = 'c-scale';
    cScale.textContent = '°C';
    tempTextBox.append(temp, tempScale)
    tempToggleBox.append(checkbox, circle);
    tempContainer.append(tempTextBox, fScale, tempToggleBox, cScale);
     
    // WORKING ON DISPLAY: THINKING OF CHANGING H2 and H3 ELEMENTS TO P FOR EASIER STYLING; 
    // TRYING TO LINE UP TOGGLE WITH TEMP; AS WELL AS TRYING TO FIGURE OUT HOW TO PUT THE LISTENER ON 
    // THE TOGGLE ONLY AFTER IT'S CREATION

    infoContainer.append(city, dateElement, tempContainer);
    tempToggleBox.addEventListener('click', slideToggle);
    tempToggleBox.addEventListener('click', () => {
        if (checkbox.checked) {
            tempScale.textContent = ' °C';
            temp.textContent = farenheitToCelsius(weather.temp);
        } else if (!checkbox.checked) {
            tempScale.textContent = ' °F';
            temp.textContent = weather.temp;
        } 
    });
    
}

