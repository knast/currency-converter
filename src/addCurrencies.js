export default function addCurrencies(selectContainer) {

    const plnOption = document.createElement('option');
    plnOption.name = 'pln';
    plnOption.textContent = 'PLN';

    const eurOption = document.createElement('option');
    eurOption.name = 'eur';
    eurOption.textContent = 'EUR';

    const dolOption = document.createElement('option');
    dolOption.name = '$';
    dolOption.textContent = 'US Dollar';

    const crownOption = document.createElement('option');
    crownOption.name = 'czech-crown';
    crownOption.textContent = 'CZK';

    selectContainer.appendChild(plnOption);
    selectContainer.appendChild(eurOption);
    selectContainer.appendChild(dolOption);
    selectContainer.appendChild(crownOption);

}