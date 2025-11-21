const imageAttributions = {
    "clear-day.jpg": `Photo by <a href="https://unsplash.com/@art_pilgrim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tolu Olarewaju</a> on <a href="https://unsplash.com/photos/black-bird-flying-over-the-lake-during-daytime-BXfi_y4PN1I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
    "clear-night.jpg": `Photo by <a href="https://unsplash.com/@gregjeanneau?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gregoire Jeanneau</a> on <a href="https://unsplash.com/photos/clear-blue-sky-R6DKrDa_wyQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
    "cloudy-day.jpg": `Photo by <a href="https://unsplash.com/@eprouzet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eric Prouzet</a> on <a href="https://unsplash.com/photos/a-cloudy-sky-over-a-beach-with-a-boat-in-the-water-9hIJJghBqb0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
    "cloudy-night.jpg": `Photo by <a href="https://unsplash.com/@antohakraev?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anton Kraev</a> on <a href="https://unsplash.com/photos/white-clouds-and-blue-sky-h80XYfMWzfY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
    "foggy-day.jpg": `Photo by <a href="https://unsplash.com/@taoofterra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Terra Raponi</a> on <a href="https://unsplash.com/photos/green-pine-trees-covered-with-fog-lnJn2ybTosI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
    "foggy-night.jpg": `Photo by <a href="https://unsplash.com/@kos8256?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Konstantin Kitsenuik</a> on <a href="https://unsplash.com/photos/streetlights-glow-through-thick-fog-at-night-nWbIUextkRc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
    "rainy-day.jpg": `Photo by <a href="https://unsplash.com/@aniljose1997?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anil Jose Xavier</a> on <a href="https://unsplash.com/photos/green-leaves-in-tilt-shift-lens-nhReugydCBk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
    "rainy-night.jpg": `Photo by <a href="https://unsplash.com/@magicaleye7?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hieu Do Quang</a> on <a href="https://unsplash.com/photos/a-street-light-in-the-snow-at-night-oEIMxD_yQNQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
    "snowy-day.jpg": `Photo by <a href="https://unsplash.com/@serenaytosun?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Serenay Tosun</a> on <a href="https://unsplash.com/photos/a-yellow-house-with-snow-falling-on-the-roof-z2D7SSbUUCA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
    "snowy-night.jpg": `Photo by <a href="https://unsplash.com/@flameoffire13?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Haylee Marick</a> on <a href="https://unsplash.com/photos/water-droplets-on-clear-glass-XRW26C68LOQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
    "thunder-day.jpg": `Photo by <a href="https://unsplash.com/@navi_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Navi</a> on <a href="https://unsplash.com/photos/a-group-of-lightning-strikes-SZAnHEkwLc8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
    "thunder-night.jpg": `Photo by <a href="https://unsplash.com/@jimtography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">James Graham</a> on <a href="https://unsplash.com/photos/a-lightning-storm-is-seen-over-a-body-of-water-wUw5-mPkpmw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
}

export function getAttribution(src) {
    if (imageAttributions[src]) {
        return imageAttributions[src];
    } else {
        return "No attribution found";
    }
}

export function farenheitToCelsius(num) {
    const farenheit = num;
    const celsius = (farenheit - 32) / 1.8;
    return celsius.toFixed(1);
}


export function slideToggle() {
    const circle = document.querySelector('.circle');
    const checkbox = document.getElementById('checkbox');
    
    if(checkbox.checked) {
        circle.style.left = '0.625rem';
    } else {
        circle.style.left = '0';
    }
}

export function determineBeaufortScale(windSpeed) {
    if (windSpeed < 1) {
        return 0;
    } else if (windSpeed >= 1 && windSpeed < 4) {
        return 1;
    } else if (windSpeed >= 4 && windSpeed <= 7) {
        return 2;
    } else if (windSpeed >= 8 && windSpeed <= 12) {
        return 3;
    } else if (windSpeed >= 13 && windSpeed <= 18) {
        return 4;
    } else if (windSpeed >= 19 && windSpeed <= 24) {
        return 5;
    } else if (windSpeed >= 25 && windSpeed <= 31) {
        return 6;
    } else if (windSpeed >= 32 && windSpeed <= 38) {
        return 7;
    } else if (windSpeed >= 39 && windSpeed <= 46) {
        return 8;
    } else if (windSpeed >= 47 && windSpeed <= 54) {
        return 9;
    } else if (windSpeed >= 55 && windSpeed <= 63) {
        return 10;
    } else if (windSpeed >= 64 && windSpeed <= 72) {
        return 11;
    } else if (windSpeed >= 73) {
        return 12;
    }
} 
export async function getIconComponent(iconCode) {
    const iconName = iconCode;
    if (iconCode === 'snow-showers-day' || iconCode === 'snow-showers-night') {
        iconName = 'snow';
    }

    return await import(`./assets/icons/${iconName}.svg`)
    .then(module => module.default)
    .catch(error => {
        console.error(`Error loading icon ${iconName}`, error);
        return null;
    })
}

export function determineDayOrNight(hour) {
    if (hour >= 6 && hour < 18) {
        return 'day';
    } else {
        return 'night';
    }
}

export async function getBackgroundImageUrl(imageCode, hour) {
    let imageName = imageCode;
    if (imageCode === 'snow-showers-day') {
        imageName = 'snowy-day';
    } else if (imageCode === 'snow-showers-night') {
        imageName = 'snowy-night';
    } else if (imageCode === 'thunder-showers-day') {
        imageName = 'thunder-day';
    } else if (imageCode === 'thunder-showers-night') {
        imageName = 'thunder-night';
    } else if (imageCode === 'showers-day') {
        imageName = 'rainy-day';
    } else if (imageCode === 'showers-night') {
        imageName = 'rainy-night';
    } else if (imageCode === 'partly-cloudy-day') {
        imageName = 'cloudy-day';
    } else if (imageCode === 'partly-cloudy-night') {
        imageName = 'cloudy-night';
    } else if (imageCode === 'snow' && hour === 'day') {
        imageName = 'snowy-day';
    } else if (imageCode === 'snow' && hour === 'night') {
        imageName = 'snowy-night';
    } else if (imageCode === 'thunder-rain' && hour === 'day') {
        imageName = 'thunder-day';
    } else if (imageCode === 'thunder-rain' && hour === 'night') {
        imageName = 'thunder-night';
    } else if (imageCode === 'thunder-rain' && hour === 'day') {
        imageName = 'thunder-day';
    } else if (imageCode === 'rain' && hour === 'day') {
        imageName = 'rainy-day';
    } else if (imageCode === 'rain' && hour === 'night') {
        imageName = 'rainy-night';
    } else if (imageCode === 'fog' && hour === 'day') {
        imageName = 'foggy-day';
    } else if (imageCode === 'fog' && hour === 'night') {
        imageName = 'foggy-night';
    } else if (imageCode === 'cloudy' && hour === 'day') {
        imageName = 'cloudy-day';
    } else if (imageCode === 'cloudy' && hour === 'night') {
        imageName = 'cloudy-night';
    } else if (imageCode === 'wind' && hour === 'day') {
        imageName = 'clear-day';
    } else if (imageCode === 'wind' && hour === 'night') {
        imageName = 'clear-night';
    }

    return await import(`./assets/background-images/${imageName}.jpg`)
    .then(module => module.default)
    .catch(error => {
        console.error(`Error loading image ${imageName}`, error);
        return null;
    })
}

export function getImageSrc(imageCode, hour) {
    let imageName = imageCode;
    if (imageCode === 'snow-showers-day') {
        imageName = 'snowy-day';
    } else if (imageCode === 'snow-showers-night') {
        imageName = 'snowy-night';
    } else if (imageCode === 'thunder-showers-day') {
        imageName = 'thunder-day';
    } else if (imageCode === 'thunder-showers-night') {
        imageName = 'thunder-night';
    } else if (imageCode === 'showers-day') {
        imageName = 'rainy-day';
    } else if (imageCode === 'showers-night') {
        imageName = 'rainy-night';
    } else if (imageCode === 'partly-cloudy-day') {
        imageName = 'cloudy-day';
    } else if (imageCode === 'partly-cloudy-night') {
        imageName = 'cloudy-night';
    } else if (imageCode === 'snow' && hour === 'day') {
        imageName = 'snowy-day';
    } else if (imageCode === 'snow' && hour === 'night') {
        imageName = 'snowy-night';
    } else if (imageCode === 'thunder-rain' && hour === 'day') {
        imageName = 'thunder-day';
    } else if (imageCode === 'thunder-rain' && hour === 'night') {
        imageName = 'thunder-night';
    } else if (imageCode === 'thunder-rain' && hour === 'day') {
        imageName = 'thunder-day';
    } else if (imageCode === 'rain' && hour === 'day') {
        imageName = 'rainy-day';
    } else if (imageCode === 'rain' && hour === 'night') {
        imageName = 'rainy-night';
    } else if (imageCode === 'fog' && hour === 'day') {
        imageName = 'foggy-day';
    } else if (imageCode === 'fog' && hour === 'night') {
        imageName = 'foggy-night';
    } else if (imageCode === 'cloudy' && hour === 'day') {
        imageName = 'cloudy-day';
    } else if (imageCode === 'cloudy' && hour === 'night') {
        imageName = 'cloudy-night';
    } else if (imageCode === 'wind' && hour === 'day') {
        imageName = 'clear-day';
    } else if (imageCode === 'wind' && hour === 'night') {
        imageName = 'clear-night';
    }
    return imageName;
}

export function generateWindDirection(deg) {
    if (deg >= 348.75 || deg < 11.25) {
        return "North";
    } else if (deg >= 11.25 && deg < 33.75) {
        return "North-Northeast"
    } else if (deg >= 33.75 && deg < 56.25) {
        return "Northeast";
    } else if (deg >= 56.25 && deg < 78.75) {
        return "East-Northeast";
    } else if (deg >= 78.75 && deg < 101.25) {
        return "East";
    } else if (deg >= 101.25 && deg < 123.75) {
        return "East-Southeast";
    } else if (deg >= 123.75 && deg < 146.25) {
        return "Southeast";
    } else if (deg >= 146.25 && deg < 168.75) {
        return "South-Southeast";
    } else if (deg >= 168.75 && deg < 191.25) {
        return "South";
    } else if (deg >= 191.25 && deg < 213.75) {
        return "South-Southwest";
    } else if (deg >= 213.75 && deg < 236.25) {
        return "Southwest";
    } else if (deg >= 236.25 && deg < 258.75) {
        return "West-Southwest";
    } else if (deg >= 258.75 && deg < 281.25) {
        return "West";
    } else if (deg >= 281.25 && deg < 303.75) {
        return "West-Northwest";
    } else if (deg >= 303.75 && deg < 326.25) {
        return "Northwest";
    } else if (deg >= 326.25 && deg < 348.75) {
        return "North-Northwest";
    }
}

export function determinePressureLevel(pressure) {
    if (pressure >= 1018) {
        return "high";
    } else if (pressure <= 1002) {
        return "low";
    } else if (pressure > 1002 || pressure < 1018) {
        return "normal";
    }
}

export function determineVisibility(visibility) {
    if (visibility >= 3 && visibility <= 5) {
        return "Low"
    } else if (visibility < 3) {
        return "Very Poor"
    } else {
        return "Good"
    }
}