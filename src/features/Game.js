import getPokemon from "./getPokemon";
import Score from "./Score";
import Card from "./Card";

const NUM_CARDS = 10;

class Game {
    constructor() {
        this.cards = [];
        this.score = new Score();
    }

    createCards = async () => {
        const pokemonList = await getPokemon(NUM_CARDS);
        const cardList = pokemonList.map((pokemon) => new Card(pokemon));
        // console.log(cardList);
        this.cards = cardList;
        return this;
    }
}

export default Game;