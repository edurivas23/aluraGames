
async function listGames() {
    const connection = await fetch('http://localhost:3000/games')
    const connectionConvert = await connection.json();


    return connectionConvert;
}

async function uploadGame(gameName, price, image, category) {

    const connection = await fetch('http://localhost:3000/games', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            gameName: gameName,
            price: price == "0" ? 'gratis' : `$ ${price} USD`,
            image: image,
            category: category
        })
    });
    const connectionConvert = await connection.json();
    if (!connection.ok) {
        throw new Error("Ha ocurrido un error al enviar el video");
    }
    return connectionConvert;

}

async function searchGame(word) {
    const connection = await fetch(`http://localhost:3000/games?q=${word}`);
    const connectionConvert = await connection.json();
    return connectionConvert;
}

async function deleteGame(id) {

    const connection = await fetch(`http://localhost:3000/games/${id}`, {
        method: 'DELETE'
    });
    const connectionConvert = await connection.json();
    return connectionConvert;
}

export const connectAPI = {
    listGames,
    uploadGame,
    searchGame,
    deleteGame
}

