import displayInterface from './displayInterface.js';


async function getCurrencyData(userCurrency, convertCurrency) {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "6uCc6EgRjepXuQDpI9wO1ebptb0ekznd");
    
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        }
    
        const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${convertCurrency.value}&from=${userCurrency.value}&amount=50`, requestOptions)
        const data = await response.json();
        return data.result;
        
    }

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
        const conversion = getCurrencyData(userCurrency, convertCurrency);
        console.log(conversion);
        display.textContent = conversion;
            

    })


}
)();
