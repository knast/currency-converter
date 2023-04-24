import displayInterface from './displayInterface.js';
import getCurrencyData from './getCurrencyData.js';

(() => {

    // Calling function responsible for displaying the interface
    displayInterface();

        
    const convertBtn = document.querySelector('.convert-btn');
    // Event Listener for button, responsible for getting the data from API and displaying it in .display div
    convertBtn.addEventListener('click', () => {

        const userCurrency = document.getElementById('user-currency');
        const convertCurrency = document.getElementById('currency-to-convert');
        const valueToConvert = document.getElementById('user-value').value;
        const display = document.querySelector('.display');
        console.log(valueToConvert);
        const conversion = getCurrencyData(userCurrency, convertCurrency, valueToConvert);
        display.textContent = conversion;
            

    })


}
)();
