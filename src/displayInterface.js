import addCurrencies from './addCurrencies.js';

export default function displayInterface() {

    const body = document.querySelector('body');

    // Adding a container for the whole interface (inputs, currency options and etc.)
    const container = document.createElement('div');
    container.classList.add('interface-container');
    body.appendChild(container);

    // Adding node for appending elements to it
    const interfaceContainer = document.querySelector('.interface-container');

    // Adding user-input section for an user to enter a value for conversion
    const userContainer = document.createElement('div');
    userContainer.classList.add('user-value');
    interfaceContainer.appendChild(userContainer);

    // Adding a container for select input and an icon (button) for converting values
    const chooseAndConvert = document.createElement('div');
    chooseAndConvert.classList.add('choose-convert');
    interfaceContainer.appendChild(chooseAndConvert);

    // Adding a section for displaying the converted value
    const convertValue = document.createElement('div');
    convertValue.classList.add('converted-value');
    interfaceContainer.appendChild(convertValue);



    // Adding node for adding label and input to user section
    const userSection = document.querySelector('.user-value');


    // Adding label and input to user section
    const labelUserValue = document.createElement('label');
    labelUserValue.setAttribute('id', 'user-value');
    labelUserValue.textContent = 'Enter a value:';
    const inputUserValue = document.createElement('input');
    inputUserValue.setAttribute('type', 'number');
    inputUserValue.setAttribute('id', 'user-value');
    inputUserValue.classList.add('user-input');
    userSection.appendChild(labelUserValue);
    userSection.appendChild(inputUserValue);


    // Adding node for adding select inputs to choose what currency user needs to convert
    const conversionSection = document.querySelector('.choose-convert');

    
    // Adding select input for user to choose currency for conversion
    const selectInput = document.createElement('select');
    selectInput.name = 'user-currencies';
    selectInput.setAttribute('id', 'user-currency');
    conversionSection.appendChild(selectInput);

    // Adding an image which will work as a button to launch event which fetches data and converts the user input and displays it
    const convertBtn = new Image(100,100);
    convertBtn.src = '../images/swap.png';
    convertBtn.classList.add('convert-btn');
    conversionSection.appendChild(convertBtn);

    // Adding select element for choosing which currency an user wants to convert to
    const selectCurrency = document.createElement('select');
    selectCurrency.name = 'currencies';
    selectCurrency.setAttribute('id', 'currency-to-convert');
    conversionSection.appendChild(selectCurrency);


    // Adding node for a section which displays the converted value
    const displaySection = document.querySelector('.converted-value');


    // Adding a section for displaying the converted value
    const convertLabel = document.createElement('p');
    convertLabel.classList.add('convert-value');
    convertLabel.textContent = 'Converted Value:';
    const convertDisplay = document.createElement('div');
    convertDisplay.classList.add('display');
    displaySection.appendChild(convertLabel);
    displaySection.appendChild(convertDisplay);

    // Node for adding options in select element
    const userSelect = document.getElementById('user-currency');


    // Function for creating and appending options to a select element
    addCurrencies(userSelect);

    const currencyConvert = document.getElementById('currency-to-convert');

    addCurrencies(currencyConvert);

    
    

    
    









};