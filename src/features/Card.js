class Card {
    constructor(pokemon) {
        this.name = pokemon.name;
        this.id = pokemon.id;
        this.sprite = pokemon.sprite;
        this.selected = false;
    }

    select() {
        this.selected = true;
    }

    deselect() {
        this.selected = false;
    }

};

export default Card;