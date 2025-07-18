const button = document.querySelector("#btn");
const par = document.querySelector("#par");

/*button.addEventListener("click", getFoxes);

async function getFoxes(){
    const res = await fetch("https://randomfox.ca/floof");

    const resReceived = await res.json();
    
    showImages(resReceived);
}

function showImages(resReceived){
    par.innerHTML = `<img src=${resReceived.image} width = "500px alt = "Fox">`;
}
----------- Old Method------------*/

button.addEventListener("click", getFoxes);

function getFoxes(){
    fetch("https://randomfox.ca/floof")

    .then( res => res.json())
    
    .then(resReceived => par.innerHTML = `<img src=${resReceived.image} width = "500px alt = "Fox">`)
}
