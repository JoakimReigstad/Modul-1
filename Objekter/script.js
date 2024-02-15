let player = {
    name: "Petter",
    image: "img/pokemonTrainerIdle.png",
    throwImage: "img/pokemonTrainerThrow.png",
    pokemons: [],
};

let pokemons = [
    {
        name: "Pikachu",
        health: 45,
        image: "img/pikachu.png",
        level: 8,
    },
    {
        name: "Bulbasaur",
        health: 70,
        image: "img/bulbasaur.png",
        level: 12,
    },
    {
        name: "Oranguru",
        health: 170,
        image: "img/oranguru.png",
        level: 45,
    },
    {
        name: "Drowzee",
        health: 90,
        image: "img/drowzee.png",
        level: 33,
    },
    {
        name: "Charmander",
        health: 100,
        image: "img/charmander.png",
        level: 10,

    },
    {
        name: "Mew",
        health: 200,
        image: "img/mew.png",
        level: 30,

    },
    {
        name: "Squirtle",
        health: 130,
        image: "img/squirtle.png",
        level: 35,

    }
];

let possiblePokemon = pokemons;
let randomPokemon;

let app = document.getElementById("app");

updateView();

function updateView() {
    getRandomPokemon();
    app.innerHTML = /*HTML*/ `
    <div class="container">
        <div class="opposingPokemon">
            <div>${randomPokemon.name} </div>
            <div>lvl: ${randomPokemon.level}</div>
            <img src="${randomPokemon.image}">
        </div>
        
        <div class="bottomScreen">
            <div class="player">
                <img src="${player.image}"> <!-- Use player.image by default -->
                <div>${player.name}</div>
            </div>

            <div class="buttonContainer">
                <button onclick="catchPokemon()">Fang</button>    
                <button onclick="updateView()">Finn en annen</button>
                <button onclick="showPokemon()">Vis dine pokemon</button>       
            </div>
        </div>
    </div>
    `;
}

function caughtPokemonView() {
    app.innerHTML = /*HTML*/ `
    <div class="caughtContainer">
        <h1>Du fanget ${player.pokemons[player.pokemons.length - 1].name}</h1>
        <div class="buttonContainer">
            <button onclick="updateView()">Finn en annen</button>
            <button onclick="showPokemon()">Vis dine pokemon</button>       
        </div>
    </div>
    `;
   
    setTimeout(() => {
        player.image = "img/pokemonTrainerIdle.png";
        updateView();
    }, 1000);
}

function catchPokemon() {
    player.pokemons.push(randomPokemon);
    player.image = player.throwImage;
    caughtPokemonView();
}

function showPokemon() {
    const caughtPokemonView = document.getElementById("caughtPokemonView");
    caughtPokemonView.innerHTML = ""; // Tøm viewet først

    if (player.pokemons.length === 0) {
        caughtPokemonView.textContent = "Du har ingen pokémon.";
    } else {
        player.pokemons.forEach(pokemon => {
            const pokemonDiv = document.createElement("div");
            pokemonDiv.textContent = pokemon.name;
            caughtPokemonView.appendChild(pokemonDiv);
        });
    }
}


function getRandomPokemon() {
    let randomNum = Math.floor(Math.random() * possiblePokemon.length);
    randomPokemon = possiblePokemon[randomNum];
}

