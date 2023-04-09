import debounce from 'lodash.debounce';

export default debounce(function fetchCountries(url) {
    
    return fetch (url).then(
        (response) => {
            if (!response.ok) {
                throw new Error(response.status);
              }
              return response.json();
        }
    );
  }, 300) 

//   export function renderCountriesList(countries) {
//     const markup = countries
//       .map((country) => {
//         return `
//             <li style="list-style-image: ${country.flags.svg}">
//               <p>${country.name}</p>
//             </li>
//         `;
//       })
//       .join("");
//     countryList = markup;
// }

  