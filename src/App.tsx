import './App.css';
import CardDeck from "./lib/cardDeck.ts";
import ICard from "./lib/card.ts";
import { useState } from "react";
import Card from "./components/Card/Card.tsx";
import cardDeck from "./lib/cardDeck.ts";


const App = () => {
    const [hand, setHand] = useState<ICard[]>([]);
    const [deck, setDeck] = useState<CardDeck>();

    const dealCards = () => {
        const newDeck = new cardDeck();
        const newHand = newDeck.getCards(5);

        setHand(newHand);
        setDeck(newDeck);
    };

    const getFiveCard = () => {
        if (deck && deck.cards.length > 0) {
            const copyDeck = deck;
            const newHand = copyDeck.getCards(5);

            setHand(newHand);
            setDeck(copyDeck);
        }
    };

    return (
        <div className="app">
        {
            deck ? <h2>{deck.cards.length}</h2> : ''
        }
        <button onClick={dealCards}>Раздать карты</button>
            {deck?.cards.length !== 0
                ?
                <div className="playingCards faceImages">

                    {hand.map((card) => {
                        if (card) {
                            return (
                                <Card rank={card.rank} suit={card.suit} key={card.rank + card.suit}/>
                            )
                        }
                    })}

                    {hand.length > 0 ?
                        <div>
                            <button onClick={getFiveCard}>Получить пять карт</button>
                        </div> : ''
                    }
                </div>
                :
                <p>Пусто</p>
            }
        </div>
    );
};

export default App;
