// здійснюємо потрібні імпорти
import './css/styles.css';
import debounce from 'lodash.debounce';
import { renderCountriesList } from './fetchCountries';
import fetchCountries from './fetchCountries';
// захоплюємо потрібні елементи
const input = document.querySelector('input');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', () => {
    const countryName = input.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}`;
    fetchCountries(url) 
    .then((countries) => renderCountriesList(countries))
    .catch((error) => console.log(error));
});



// запускаємо функцію рендеренгу результату
function renderCountriesList(countries) {
    const markup = countries
      .map((country) => {
        return `
            <li style="list-style-image: ${country.flags.svg}">
              <p>${country.name}</p>
            </li>
        `;
      })
      .join("");
    countryList = markup;
}
const DEBOUNCE_DELAY = 300;
