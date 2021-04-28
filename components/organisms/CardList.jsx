import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../index';
import styled from '@emotion/styled';
import { mq } from '../../utils/breakpoints';

const Container = styled.div`
  opacity: ${props => props.isOpen ? '0' : '1'};
  transform: ${props => props.isOpen ? 'translateX(-100px)' : 'translateX(0px)'};
  position: absolute;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-color: lightgreen;
  width: 100%;
  transition: all .5s;
  ${mq[0]} {
    position: relative;
    display: flex;
    opacity: 1;
    transform: translateX(0px);
    flex-direction: column;
  }
`

const CardList = ({ data = [], isOpen }) => {
  const [cards, setCards] = useState(data);
  const postsDismissed = useSelector((state) => state.postsDismissed);

  useEffect(() => {
    setCards(renderCard())
  }, [])

  const renderCard = () => {
    return data.filter(({ data }) => {
      const isValid = postsDismissed.find((id) => {
        return data.id === id;
      });
      return !isValid;
    })
  }

  return (
    <Container isOpen={isOpen}>
      {cards.map(({ data }) => <Card key={data.id} {...data} />)}
    </Container>
  );
}

export default CardList;