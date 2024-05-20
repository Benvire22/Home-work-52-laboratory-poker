import Card from "./card.ts";

interface ICard {
    rank: string;
    suit: string;
}

const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
const suit = ['diams', 'hearts', 'clubs', 'spades'];

class CardDeck {
    cards:ICard[] = []

    constructor() {
        this.cards = []

        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                const card = new Card(rank[j], suit[i]);
                this.cards.push(card);
            }
        }
    }

    getCard(): ICard {
        const randomNumber = Math.floor(Math.random() * this.cards.length);
        const randomCard = this.cards.splice(randomNumber);
        return randomCard[0];
    }

    getCards(howMany: number): ICard[] {
        const randomCards: ICard[] = [];

        for (let i = 0; i < howMany; i++) {
            const randomCard = this.getCard();
            randomCards.push(randomCard);
        }

        return randomCards;
    }
}

export default CardDeck;