import Card from './card.ts';

const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
const suit = ['diams', 'hearts', 'clubs', 'spades'];

export default class CardDeck {
  cards: Card[] = [];

  constructor() {
    this.cards = [];

    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        const card = new Card(rank[j], suit[i]);
        this.cards.push(card);
      }
    }
  }

  getCard(): Card {
    const randomNumber = Math.floor(Math.random() * this.cards.length);
    const randomCard = this.cards.splice(randomNumber, 1);
    return randomCard[0];
  }

  getCards(howMany: number): Card[] {
    const randomCards: Card[] = [];

    for (let i = 0; i < howMany; i++) {
      const randomCard = this.getCard();
      randomCards.push(randomCard);
    }

    return randomCards;
  }
}