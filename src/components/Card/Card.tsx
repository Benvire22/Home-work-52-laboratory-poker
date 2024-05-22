import React from 'react';

interface Props {
  rank: string;
  suit: string;
}

const Card: React.FC<Props> = ({rank, suit}) => {
  const getSuitSymbol = (suit: string): string => {
    switch (suit) {
      case 'diams':
        return '♦';
      case 'hearts':
        return '♥';
      case 'clubs':
        return '♣';
      case 'spades':
        return '♠';
      default:
        throw new Error('Undefined suit');
    }
  };

  return (
    <span className={`card rank-${rank} ${suit}`}>
      <span className="rank">{rank.toUpperCase()}</span>
      <span className="suit">{getSuitSymbol(suit)}</span>
    </span>
  );
};

export default Card;