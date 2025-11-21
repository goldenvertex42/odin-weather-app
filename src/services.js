async function fetchWeatherData(location) {
    const apiKey = '6YF4TVLSPUDCS58DTLN5FCCES';
    const baseURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
    const url = `${baseURL}${location}?unitGroup=us&key=${apiKey}&contentType=json&iconSet=icons2`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            alert('Location not found; please try again');
            throw new Error(`HTTP error! Status:${response.status}`); 
        }
        const rawData = await response.json();
        console.log(rawData);
        return rawData;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}
export async function processWeatherData(location) {
    const data = await fetchWeatherData(location);
    const city = data.address;
    const day = data.days[0].datetime;
    const timestamp = data.currentConditions.datetimeEpoch*1000;
    const timezone = data.timezone;
    const temp = data.currentConditions.temp;
    const tempMax = data.days[0].tempmax;
    const tempMin = data.days[0].tempmin;
    const feelsLike = data.currentConditions.feelslike;
    const precipprob = data.currentConditions.precipprob;
    const preciptype = data.currentConditions.preciptype;
    const windSpeed = data.currentConditions.windspeed;
    const windDir = data.currentConditions.winddir;
    const humidity = data.currentConditions.humidity;
    const pressure = data.currentConditions.pressure;
    const uvIndex = data.currentConditions.uvindex;
    const visibility = data.currentConditions.visibility;
    const icon = data.currentConditions.icon;
    const description = data.description;
    return { 
        city,
        day,
        timestamp,
        timezone,
        temp, 
        tempMax, 
        tempMin, 
        feelsLike, 
        precipprob,
        preciptype, 
        windSpeed,
        windDir,
        humidity,
        pressure,
        uvIndex,
        visibility,
        icon,
        description }
}

