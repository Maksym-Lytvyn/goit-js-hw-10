// // Функція віддачі промісу
// function fetchUsers() {
//     let countryName = input.value;
//     countryName.trim();
//     return fetch(
//         `https://restcountries.com/v3.1/name/${countryName}`
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     });
//   }

// // слухач запуску промісу
// input.addEventListener('input', () => {
//     const throttled = _throttle(() => { fetchUsers(url)
//     .then((data) => renderCountries(data)
//     )
//     .catch((error) => {
//       Notiflix.Notify.failure('Овва, країни з таким іменем не існує')
//       errorHTMLstate();
//     }
//     )}, 300);
//     throttled(); 
//   })
// // відрендеримо перелік
// function renderCountries(data){
//     console.log(data[0])
//     countryList.innerHTML = data.map((item) => {
//       return `<li class='no-bullets'>
//       <div class="info-flex">
//       <img src="${item.flags.svg}" class="biggerIcon">
//       <p>${item.name.official}</p>
//       </div>
//     </li>`;
//     })
    
//     if (countryName.length < 2) {
//       Notiflix.Notify.info("Занадто багато результатів. Введіть точніший запит");
//       countryList.innerHTML = ''
//       countryInfo.innerHTML = ''
//     }
//     if (countryName.length > 3) {
//       countryList.innerHTML = ''

//       countryInfo.innerHTML = `<div class="info-flex"><img src="${data[0].flags.svg}" class="biggerIcon"><h3 class="biggerFont">${data[0].name.official}</h3></div>
//     <li class='no-bullets'><b>Capital: </b> ${data[0].capital}</li>
//     <li class='no-bullets'><b>Population: </b> ${data[0].population}</li>
//     <li class='no-bullets'><b>Languages: </b> ${Object.values(data[0].languages).toString().split(',').join(', ')}</li>
//     `;
//     }
// }

// // HTML помилки
// export function errorHTMLstate(){
//     countryList.innerHTML = ''
//       countryInfo.innerHTML = ''
//   }