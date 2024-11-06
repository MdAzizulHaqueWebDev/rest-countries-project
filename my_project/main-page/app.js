const countriesContainer = document.querySelector(".countries-container");

fetch("https://restcountries.com/v3.1/all")
	.then((res) => res.json())
	.then((countries) => {
		// console.log(countries[0]);
		countries.slice(0, 10).forEach((country) => {
			const countryCard = document.createElement("a");
			countryCard.classList.add("country-card");

			countryCard.href = `../country-details/country.html?name=${country.name.common}`;
			countryCard.innerHTML = `
                        <img src=${
													country.flags?.svg || country.flags?.png
												} alt=${country.name.common}>
                        <div class="country-desc">
                            <h3>${country.name.common}</h3>
                            <p>
                                <b>Population:</b> ${country.population.toLocaleString(
																	"bd",
																)}
                            </p>
                            <p> 
                                <b>Region:</b> ${country.region}
                            </p>
                            <p>
                                <b>Capital:</b> ${country.capital?.[0]}
                            </p>
                        </div>				
    `;
			countriesContainer.appendChild(countryCard);
		});
	});
