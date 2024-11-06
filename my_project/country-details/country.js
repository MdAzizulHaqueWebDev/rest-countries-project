const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get("name");
const detailsContainer = document.querySelector(".details-container");
const backButton = document.querySelector(".back-btn");
backButton.addEventListener("click", function (e) {
	history.back();
});

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
	.then((result) => result.json())
	.then(([country]) => {
		console.log(country);
		detailsContainer.innerHTML = `
        <img
					src=${country.flags.svg}
					alt="asd"
				/>

				<div class="county-details">
					<h3>Palestine</h3>
					<section class="county-details-info">
						<p>
							<b>Native Name :</b> ${country.name.nativeName?.eng?.common}
						</p>
						<p>
							<b>Population :</b> ${country.population.toLocaleString("en")}
						</p>
						<p>
							<b>Region :</b> ${country.region}
						</p>
						<p>
							<b>Sub Region :</b>
						</p>
						<p>
							<b>Capital :</b> ${country.capital}
						</p>
						<p>
							<b>Top Level Domain :</b>
						</p>
						<p>
							<b>Currencies :</b> ${country.currencies?.SHP?.name}
						</p>
						<p>
							<b>Language :</b> ${country.languages?.eng}
						</p>
					</section>
					<section class="border-countries">
						<b>Border Countries:</b> <a href="#"> Bermuda</a>
						<a href="#"> Bermuda</a>
					</section>
				</div>`;
	})
	.catch((err) => {
		throw err;
	});
