import { connectAPI } from "./connectAPI.js"
const $form = document.querySelector("[data-form]")

async function addGame(event) {
    event.preventDefault();

    const $gameName = document.querySelector("[data-name]").value;
    const $gamePrice = document.querySelector("[data-price]").value;
    const $gameImage = document.querySelector("[data-image]").value;
    const $gameMode = document.querySelector('input[name="gameMode"]:checked');

   
    if (!$gameMode) {
        alert("Por favor selecciona un modo de juego");
        return;
    }
    const selectedMode = $gameMode.value;
    try{
        await connectAPI.uploadGame($gameName,$gamePrice,$gameImage,selectedMode);
       
    }
    catch(e){
        alert(e)
    }

}

$form.addEventListener('submit', e => addGame(e))