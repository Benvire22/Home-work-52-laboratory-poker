import Card from "./card.ts";

export default class PokerHand {
    cards: Card[] = [];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    getOutcome(): string {
        let outcome: string = 'Старшая карта';
        let flashCombination = 0;
        let onePairCombination = 0;

        const ranks: string[] = [];
        const suits: string[] = [];

        this.cards.forEach((card) => {
            if (card) {
                ranks.push(card.rank)
                suits.push(card.suit)
            }
        });

        for (let i = 0; i < ranks.length; i++) {
            const currentRank = ranks[i];

            for (let j = 0; j < ranks.length; j++) {

                if (ranks[j] === currentRank) {
                    onePairCombination++;

                    if (onePairCombination === 7) {
                        outcome = 'Одна пара';
                        break;
                    }
                }
            }
        }

        for (let i = 0; i < suits.length; i++) {
            if (suits[i] === suits[4]) {
                flashCombination++;

                if (flashCombination === 5) {
                    outcome = 'Флеш';
                    console.log(flashCombination);
                    break;
                }
            }
        }

        return outcome;
    }
}