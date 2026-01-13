import { countryList } from "./code.js";

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json";

const dropdowns = document.querySelectorAll(".dropdown select");

for(let code in countryList){
    console.log(code);
}

for(let select of dropdowns){

}