import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from '../index';
import styled from '@emotion/styled';
import { mq } from '../../utils/breakpoints';
import { setAllPostsDismissed } from '../../config/actions'

const Container = styled.div`
  transform: ${props => props.isOpen ? 'translateX(-500px)' : 'translateX(0px)'};
  position: absolute;
  transition: all .5s;
  height: 100vh;
  width: 100%;
  background-color: lightgreen;
  ${mq[0]} {
    position: relative;
    display: flex;
    opacity: 1;
    transform: translateX(0px);
    flex-direction: column;
  }
`

const ListContainer = styled.div`
  opacity: ${props => props.isDismissed ? '0' : '1'};
  transform: ${props => props.isDismissed ? 'translateX(-100px)' : 'translateX(0px)'};
  width: 100%;
  transition: all .5s;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  width: 100%;
  transition: all .5s;
  ${mq[0]} {
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

const CardList = ({ data = [], isOpen }) => {
  const [cards, setCards] = useState(data);
  const [isDismissed, setIsDismissed] = useState(false);
  const postsDismissed = useSelector((state) => state.postsDismissed);
  const dispatch = useDispatch();

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

  const dismissPosts = () => {
    setIsDismissed(true)
    dispatch(setAllPostsDismissed(data.map(({ data: { id }}) => id)))
  }

  return (
    <Container isOpen={isOpen}>
      <ListContainer isDismissed={isDismissed}>
        {cards.map(({ data }) => <Card key={data.id} {...data} />)}
      </ListContainer>
      <Button
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%'
        }}
        text="Delete all"
        onClick={() => dismissPosts()}
      />
    </Container>
  );
}

export default CardList;