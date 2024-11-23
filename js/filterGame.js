import { connectAPI } from "./connectAPI.js";
import createCard from "./showCard.js";

const $inputSearch = document.querySelector("[data-search]");

async function filterGames(event) {

    event.preventDefault();
    const searchData = $inputSearch.value;
    const searching = await connectAPI.searchGame(searchData);
    const single = document.querySelector("[data-singleplayer]");
    const multi= document.querySelector("[data-multiplayer]");


    while (single.firstChild && multi.firstChild) {
        single.removeChild(single.firstChild)
        multi.removeChild(multi.firstChild)

    }
    single.replaceChildren();
    multi.replaceChildren();

    searching.forEach(game =>{
    
        if(game.category === "singleplayer"){
            single.appendChild(createCard(game.gameName, game.price, game.image))
        } else if(game.category === "multiplayer"){
            multi.appendChild(createCard(game.gameName, game.price, game.image)) 
        }
    } );

    if (searching.length === 0) {
        single.innerHTML = `<h2 >No se encontro nada relacionado con ${searchData} </h2>`
         multi.innerHTML = `<h2 >No se encontro nada relacionado con ${searchData} </h2>`

    }

}

$inputSearch.addEventListener('keydown', event => {
    if (event.key === "Enter") {
       
        filterGames(event)
    }
})

