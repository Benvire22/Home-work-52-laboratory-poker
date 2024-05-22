import './App.css';
import CardDeck from './lib/cardDeck.ts';
import ICard from './lib/card.ts';
import {useState} from 'react';
import Card from './components/Card/Card.tsx';
import cardDeck from './lib/cardDeck.ts';
import PokerHand from './lib/pokerHand.ts';


const App = () => {
  const [hand, setHand] = useState<ICard[]>([]);
  const [deck, setDeck] = useState<CardDeck>();
  const [combination, setCombination] = useState<string>('');

  const dealCards = () => {
    const newDeck = new cardDeck();
    getNewCards(newDeck);
  };

  const getNewCards = (deck: CardDeck) => {
    if (deck) {
      const copyDeck = deck;
      const newHand = copyDeck.getCards(5);
      const outcome = new PokerHand(newHand);

      setHand(newHand);
      setDeck(copyDeck);
      setCombination(outcome.getOutcome());
    }
  };

  return (
    <div className="app">
      <h2>Карт в колоде: {deck ? deck.cards.length : '52'}</h2>
      <button onClick={dealCards}>Раздать новую колоду</button>

      {hand.length !== 0 ? (
        <div className="playingCards faceImages">

          {hand.map((card) => {
            if (card) {
              return <Card rank={card.rank} suit={card.suit} key={card.rank + card.suit}/>;
            }
          })}

          {deck?.cards.length !== 0 ? (
            <div>
              <button onClick={() => deck ? getNewCards(deck) : null}>Получить карты</button>
            </div>
          ) : <h4>Карт не осталось</h4>
          }

          <h2>Результат раунда: {combination}</h2>
        </div>
      ) : <p>Пусто...</p>
      }

    </div>
  );
};

export default App;
