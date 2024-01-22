import './App.css';
import { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import CardList from './Components/CardList';
import data from './data.json';

export default function App() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    setCardList(data);
  }, []);

  return (
    <Container>
      <CardList cardList={cardList} />
    </Container>
  );
}
