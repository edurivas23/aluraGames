import { connectAPI } from "./connectAPI.js";


const single = document.querySelector("[data-singleplayer]");
const multi = document.querySelector("[data-multiplayer]");
showCard();

export default function createCard(gameName, price, image, id) {

    const game = document.createElement('article');
    game.className = "card_product"
    game.innerHTML = `
        <img src="${image}" alt="${gameName}">
                            <div class="card_elements">
                                <div class="card_description">
                                    <h1>${gameName}</h1>
                                    <p>${price}</p>
                                </div>
                                <button type="button" data-id="${id}"><i class="fas fa-trash"></i></button>
                            </div>`

    const $deleteButton = game.querySelector("[data-id]");

    $deleteButton.addEventListener('click', async (event) => {
        event.preventDefault()

        const idGame = $deleteButton.getAttribute('data-id')
        try {

            const deleteId = await connectAPI.deleteGame(idGame);
            game.remove();
            console.log(`Juego eliminado con ID: ${idGame}`, deleteId);
        }
        catch (error) {
            console.error(`Error al eliminar el juego: ${error.message}`);
        }

    })


    return game;

}




async function showCard() {

    try {

        const listAPI = await connectAPI.listGames();

        listAPI.forEach(game => {
            if (game.category === "singleplayer") {
                single.appendChild(createCard(game.gameName, game.price, game.image, game.id))
            }
            if (game.category === "multiplayer") {
                multi.appendChild(createCard(game.gameName, game.price, game.image, game.id))
            }
        })
    }

    catch (error) {
        console.log(error)
        single.innerHTML = `<h2 >Ha ocurrido un problema con la conexion :( </h2>`
        multi.innerHTML = `<h2 >Ha ocurrido un problema con la conexion :( </h2>`

    }
};

