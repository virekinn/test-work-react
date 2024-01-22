import React from 'react';
import Card from '../Card';

export default function CardList({ cardList }) {
  return (
    <div className="cardList">
      {cardList.map((card) => (
        <Card card={card} key={card.id || card.header} />
      ))}
    </div>
  );
}
