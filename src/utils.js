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
