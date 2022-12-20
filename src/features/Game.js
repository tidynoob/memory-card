import getPokemon from "./getPokemon";
import Card from "./Card";

const NUM_CARDS = 5;

class Game {
    constructor() {
        this.cards = [];
        this.score = 0;
        this.maxScore = 0;
        this.level = 1;
        this.numCards = NUM_CARDS;
        this.gen = null;
        this.numInARow = 0;
    };

    increaseLevel = () => {
        this.level += 1;
        this.numCards = this.level * NUM_CARDS;
        return this;
    };

    setGen = (gen) => {
        this.gen = gen;
        return this;
    };

    createCards = async () => {
        this.numInARow = 0;
        const pokemonList = await getPokemon(this.numCards, this.gen);
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
        return this;
    };

    selectCard = async (cardIndex) => {
        const selectedCard = this.cards[cardIndex];
        if (selectedCard.selected) {
            this.resetScore();
            this.numInARow = 0;
            await this.createCards();
        } else {
            selectedCard.selected = true;
            this.numInARow += 1;
            this.increaseScore();
            this.shuffleCards();
        }
        if (this.numInARow === this.numCards) {
            this.increaseLevel();
            await this.createCards();
        }
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