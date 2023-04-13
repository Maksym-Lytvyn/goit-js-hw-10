// здійснюємо потрібні імпорти
import './css/styles.css';
import { debounce } from 'lodash';
import _throttle from 'lodash.throttle';
import Notiflix from 'notiflix';
// захоплюємо потрібні елементи
const input = document.querySelector('input');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


input.addEventListener('input', () => {
  let countryName = input.value;
  countryName.trim();
  let url = `https://restcountries.com/v3.1/name/${countryName}`;
  console.log(url);
  const throttled = _throttle(() => { fetch(url)
  .then((res) => res.json()
  )
  .then((data) => {
    console.log(data[0])
    // countryList.innerHTML = `<p>${data[0].region}</p>`
    // countryList.innerHTML = `<li style="list-style-image: url(${data[0].flags.svg})">${data[0].name.official}</li>`
    countryList.innerHTML = data.map((item) => {
      return `<li class='no-bullets'>
      <div class="info-flex">
      <img src="${item.flags.svg}" class="biggerIcon">
      <p>${item.name.official}</p>
      </div>
    </li>`;
    })
    
    if (countryName.length < 2) {
      Notiflix.Notify.info("Занадто багато результатів. Введіть точніший запит");
      countryList.innerHTML = ''
      countryInfo.innerHTML = ''
    }
    if (countryName.length > 3) {
      countryList.innerHTML = ''

      countryInfo.innerHTML = `<div class="info-flex"><img src="${data[0].flags.svg}" class="biggerIcon"><h3 class="biggerFont">${data[0].name.official}</h3></div>
    <li class='no-bullets'><b>Capital: </b> ${data[0].capital}</li>
    <li class='no-bullets'><b>Population: </b> ${data[0].population}</li>
    <li class='no-bullets'><b>Languages: </b> ${Object.values(data[0].languages).toString().split(',').join(', ')}</li>
    `;
    }

  })
  .catch((error) => {
    Notiflix.Notify.failure('Овва, країни з таким іменем не існує')
    countryList.innerHTML = ''
    countryInfo.innerHTML = ''
  }
  )}, 300);
  throttled(); 
})
