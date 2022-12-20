import getPokemon from "./getPokemon";
import Card from "./Card";

const NUM_CARDS = 10;

class Game {
    constructor() {
        this.cards = [];
        this.score = 0;
        this.maxScore = 0;
    };

    createCards = async () => {
        const pokemonList = await getPokemon(NUM_CARDS);
        const cardList = pokemonList.map((pokemon) => new Card(pokemon));
        // console.log(cardList);
        this.cards = cardList;
        return this;
    };

    shuffleCards = () => {
        const cardsCopy = [...this.cards];
        for (let i = cardsCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = cardsCopy[i];
            cardsCopy[i] = cardsCopy[j];
            cardsCopy[j] = temp;
        }
        this.cards = cardsCopy;
    };

    selectCard = async (cardIndex) => {
        const selectedCard = this.cards[cardIndex];
        if (selectedCard.selected) {
            this.resetScore();
            await this.createCards();
        } else {
            selectedCard.selected = true;
            this.increaseScore();
            this.shuffleCards();
        }
        console.log(this.score, this.maxScore);
        return this;

    };

    resetScore = () => {
        this.score = 0;
        return this;
    };

    increaseScore = () => {
        this.score += 1;
        if (this.score > this.maxScore) {
            this.maxScore = this.score;
        };
        return this;
    }

}

export default Game;