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
        let twoPairCombination = 0;
        let threeOfAKindCombination = 0;

        const ranks: string[] = [];
        const suits: string[] = [];

        this.cards.forEach((card) => {
            if (card) {
                ranks.push(card.rank);
                suits.push(card.suit);
            }
        });

        for (let i = 0; i < ranks.length; i++) {
            const currentRank = ranks[i];

            for (let j = 0; j < ranks.length; j++) {
                if (ranks[j] === currentRank) {
                    onePairCombination++;
                    threeOfAKindCombination++;

                    if (threeOfAKindCombination >= 11) {
                        outcome = 'Тройка';
                        break;
                    }

                    if (onePairCombination >= 7) {
                        outcome = 'Одна пара';
                        twoPairCombination++;
                    }

                    if (twoPairCombination === 2) {
                        outcome = 'Две пары';
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
                    break;
                }
            }
        }

        return outcome;
    }
}