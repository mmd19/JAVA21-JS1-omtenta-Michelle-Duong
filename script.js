const countriesList = document.getElementById("country");
let countries;

const btn = document.querySelector("button");
btn.addEventListener("click", clickEvent)

function clickEvent(e) {
    e.preventDefault();

    const urlCountries = "https://restcountries.com/v3.1/currency/{currency} <https://restcountries.com/v3.1/currency/%7Bcurrency%7D>"

    getCountries(urlCountries);
}

function getCountries(url) {
    fetch("https://restcountries.com/v3.1/all").then(
        res => res.json()
    ).then(
        data => {
            console.log(data)
        }
    ).catch(displayError);
}


function displayError(e){
    document.querySelector("h4").innerText = "Kunde inte hittas";
}