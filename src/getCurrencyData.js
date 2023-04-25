// Function for fetching the data from API
export default async function getCurrencyData(userCurrency, convertCurrency) {
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