const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () =>{
    let response = await fetch(URL);
    console.log(response); //json format
    let data = await response.json();
    factPara.innerHTML = data[0].text;
};

btn.addEventListener("click", getFacts);