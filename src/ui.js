import { processWeatherData } from "./services";
import { farenheitToCelsius, slideToggle, getIconComponent, generateWindDirection, determinePressureLevel, determineVisibility, determineBeaufortScale, determineDayOrNight, getBackgroundImageUrl, getImageSrc, getAttribution } from "./utils";

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
    const timezone = weather.timezone;
    const dateHour = new Intl.DateTimeFormat('en-us', { hour: 'numeric', hour12: false, timeZone: `${timezone}` }).format(weather.timestamp);
    const hourResolved = determineDayOrNight(dateHour);
    
    const newBackgroundImage = await getBackgroundImageUrl(weather.icon, hourResolved);
    const imageName = getImageSrc(weather.icon, hourResolved);
    document.body.style.backgroundImage = `url(${newBackgroundImage})`;
    const attributionPara = document.getElementById('photo-attribution');
    attributionPara.innerHTML = getAttribution(`${imageName}.jpg`);
    

    const generalIcon = await getIconComponent(weather.icon, hourResolved);
    const windSpeedMiles = weather.windSpeed;
    const windSpeedBeaufort = determineBeaufortScale(windSpeedMiles);
    const windIcon = await getIconComponent(`wind-beaufort-${windSpeedBeaufort}`);
    const compassIcon = await getIconComponent('compass');
    const humidityIcon = await getIconComponent('humidity');
    const pressureIcon = await getIconComponent(`pressure-${determinePressureLevel(weather.pressure)}`);
    const uvIcon = await getIconComponent(`uv-index-${weather.uvIndex}`);
    
    const infoContainer = document.querySelector('.info-container');
    infoContainer.textContent = '';
   
    const headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';

    const cityAndDateBox = document.createElement('div');
    cityAndDateBox.className = 'city-and-date';

    const city = document.createElement('span');
    city.classList.add('city-name');
    city.textContent = weather.city.charAt(0).toUpperCase() + weather.city.slice(1);
    
    const dateText = new Intl.DateTimeFormat('en-us', 
        {dateStyle: 'full', timeStyle: 'short', timeZone: `${timezone}`}
    ).format(weather.timestamp);
    console.log(dateHour);
    console.log(dateText);
    const dateElement = document.createElement('span');
    dateElement.classList.add('date');
    dateElement.textContent = dateText;
    
    cityAndDateBox.append(city, dateElement);

    const generalIconElement = document.createElement('img');
    generalIconElement.className = 'gen-icon';
    generalIconElement.src = generalIcon;

    const description = document.createElement('span');
    description.id = 'description';
    description.textContent = weather.description;

    headerContainer.append(cityAndDateBox, generalIconElement, description);

    const precipBox = document.createElement('div');
    precipBox.className = 'precip-box';

    const precipHeaderText = document.createElement('span');
    precipHeaderText.classList.add('precip-header', 'header');
    precipHeaderText.textContent = 'PRECIPITATION';

    const chanceOfPrecip = document.createElement('span');
    chanceOfPrecip.id = 'chance-of-precip';
    chanceOfPrecip.textContent = `Chance of precipitation: ${weather.precipprob}%`;
    if (weather.preciptype) {
        chanceOfPrecip.textContent = `Chance of precipitation: ${weather.precipprob}% in the form of ${weather.preciptype}`;
    }

    const pressureBox = document.createElement('div');
    pressureBox.className = 'pressure-box';
    const pressureLabel = document.createElement('span');
    pressureLabel.id = 'pressure-label';
    pressureLabel.textContent = `Pressure: ${weather.pressure} mbar`
    const pressureIconElement = document.createElement('img');
    pressureIconElement.className = 'pressure-icon';
    pressureIconElement.src = pressureIcon;
    pressureBox.append(pressureLabel, pressureIconElement);

    const visibility = document.createElement('span');
    visibility.id = 'visibility';
    visibility.textContent = `Visibility: ${determineVisibility(weather.visibility)}`;

    const humidityBox = document.createElement('div');
    humidityBox.className = 'humidity-box';
    const humidityIconElement = document.createElement('img');
    humidityIconElement.className = 'humidity-icon';
    humidityIconElement.src = humidityIcon;
    const humidityLabel = document.createElement('span');
    humidityLabel.id = 'humidity-label';
    humidityLabel.textContent = `Humidity: ${weather.humidity}%`;
    humidityBox.append(humidityIconElement, humidityLabel);

    precipBox.append(precipHeaderText, chanceOfPrecip, pressureBox, visibility, humidityBox);

    const tempContainer = document.createElement('div');
    tempContainer.className = 'temp-container';

    const tempHeaderText = document.createElement('span');
    tempHeaderText.classList.add('temp-header', 'header');
    tempHeaderText.textContent = 'TEMPERATURE';

    const tempTextBox = document.createElement('div');
    tempTextBox.className = 'temp-text-box';
    const temp = document.createElement('span');
    temp.id = 'temp';
    temp.textContent = `Temperature: ${weather.temp}`;
    const tempScale = document.createElement('span');
    tempScale.id = 'temp-scale';
    tempScale.textContent = '°F';
    tempTextBox.append(temp, tempScale);

    const feelsLike = document.createElement('span');
    feelsLike.id = 'feels-like';
    feelsLike.textContent = `Feels like: ${weather.feelsLike}°F`;

    const tempRange = document.createElement('span');
    tempRange.id = 'temp-range';
    tempRange.textContent = `Temperature Range: ${weather.tempMin} - ${weather.tempMax}°F`;

    const uvBox = document.createElement('div');
    uvBox.className = 'uv-box';
    const uvLabel = document.createElement('span');
    uvLabel.id = 'uv-label';
    uvLabel.textContent = 'UV Index: ';
    const uvIconElement = document.createElement('img');
    uvIconElement.className = 'uv-icon';
    uvIconElement.src = uvIcon;
    if (weather.uvIndex === 0) {
        uvLabel.textContent = 'UV Index: 0'
        uvIconElement.src = '';
    }
    uvBox.append(uvLabel, uvIconElement);

    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'toggle-container'; 
    const fScale = document.createElement('span');
    fScale.id = 'f-scale';
    fScale.textContent = '°F';   
    const tempToggleBox = document.createElement('label');
    tempToggleBox.classList.add('toggle-box');
    tempToggleBox.for = 'checkbox';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    const circle = document.createElement('div');
    circle.className = 'circle';
    const cScale = document.createElement('span');
    cScale.id = 'c-scale';
    cScale.textContent = '°C';
    tempToggleBox.append(checkbox, circle);
    toggleContainer.append(fScale, tempToggleBox, cScale);

    tempContainer.append(tempHeaderText, tempTextBox, feelsLike, tempRange, uvBox, toggleContainer);

    const windBox = document.createElement('div');
    windBox.className = 'wind-box';

    const windHeaderText = document.createElement('span');
    windHeaderText.classList.add('wind-header', 'header');
    windHeaderText.textContent = 'WIND';

    const windSpeedLabel = document.createElement('span');
    windSpeedLabel.id = 'wind-speed-label';
    windSpeedLabel.textContent = 'Wind Speed:'
    const windIconElement = document.createElement('img');
    windIconElement.className = 'wind-icon';
    windIconElement.src = windIcon;

    const windDirectionBox = document.createElement('div');
    windDirectionBox.className = 'wind-direction-box';
    const compassIconElement = document.createElement('img');
    compassIconElement.className = 'compass-icon';
    compassIconElement.src = compassIcon;
    const windDirection = document.createElement('span');
    windDirection.id = 'wind-direction-label';
    windDirection.textContent = `Wind Direction: ${generateWindDirection(weather.windDir)}`;
    windDirectionBox.append(compassIconElement, windDirection);
    
    windBox.append(windHeaderText, windSpeedLabel, windIconElement, windDirectionBox);

    infoContainer.append(headerContainer, precipBox, tempContainer, windBox);

    tempToggleBox.addEventListener('click', slideToggle);
    tempToggleBox.addEventListener('click', () => {
        if (checkbox.checked) {
            tempScale.textContent = ' °C';
            temp.textContent = farenheitToCelsius(weather.temp);
            tempRange.textContent = `Temperature Range: ${farenheitToCelsius(weather.tempMin)} - ${farenheitToCelsius(weather.tempMax)} °C`;
            feelsLike.textContent = `Feels like: ${farenheitToCelsius(weather.feelsLike)} °C`;
        } else if (!checkbox.checked) {
            tempScale.textContent = ' °F';
            temp.textContent = weather.temp;
            tempRange.textContent = `Temperature Range: ${weather.tempMin} - ${weather.tempMax} °F`;
            feelsLike.textContent = `Feels like: ${weather.feelsLike} °F`;
        } 
    });
    
}

