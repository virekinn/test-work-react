import React from 'react';
import {
  Card as CardReactstrap,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
} from 'reactstrap';

export default function Card({ card }) {
  return (
    <CardReactstrap className="my-2 card">
      <CardHeader>{card.header}</CardHeader>
      <CardBody>
        <CardTitle tag="h5">
          <ul>
            {card.options.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </CardTitle>
      </CardBody>
      <CardFooter>{card.text}</CardFooter>
    </CardReactstrap>
  );
}
