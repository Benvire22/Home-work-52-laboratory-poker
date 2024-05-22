import Card from './card.ts';

export default class PokerHand {
  cards: Card[] = [];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  getOutcome(): string {
    let outcome: string = 'Старшая карта';

    let flashCombination: number = 0;
    let onePairCombination: number = 0;
    let twoPairCombination: number = 0;
    let threeOfKindCombination: number = 0;

    const ranks: string[] = [];
    const suits: string[] = [];

    this.cards.forEach((card) => {
      if (card) {
        ranks.push(card.rank);
        suits.push(card.suit);
      }
    });

    for (let i = 0; i < ranks.length; i++) {
      const currentRank: string = ranks[i];

      if (suits[i] === suits[4]) {
        flashCombination++;

        if (flashCombination === 5) {
          outcome = 'Флеш';
          break;
        }
      }

      for (let j = 0; j < ranks.length; j++) {
        if (ranks[j] === currentRank) {
          onePairCombination++;
          threeOfKindCombination++;

          // console.log('1:', onePairCombination);
          // console.log('2:', twoPairCombination);
          // console.log('3:', threeOfKindCombination);

          if (onePairCombination >= 7) {
            outcome = 'Одна пара';

            if (twoPairCombination < 2) {
              twoPairCombination++;
            }

            threeOfKindCombination++;
          }

          if (twoPairCombination === 2 && onePairCombination === 9) {
            outcome = 'Две пары';
            break;
          }

          if (threeOfKindCombination >= 11) {
            outcome = 'Тройка';
            break;
          }

        }
      }
    }

    if (ranks.length === 2 && ranks[0] === ranks[1]) {
      outcome = 'Одна пара';
    }

    return outcome;
  }
}