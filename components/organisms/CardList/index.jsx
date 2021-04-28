import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from '../../index';
import { setAllPostsDismissed } from '../../../config/actions';
import { fetchTopPosts } from '../../../config/services';
import { Container, ListContainer } from './styles';

const CardList = ({ isOpen }) => {
  const [cards, setCards] = useState([]);
  const [isDismissed, setIsDismissed] = useState(false);
  const { postsDismissed, posts = [], hasMorePostsId } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setCards(renderCard());
  }, []);

  useEffect(() => {
    setCards(renderCard());
  }, [posts]);

  const renderCard = () => {
    return posts.filter(({ data }) => {
      const isValid = postsDismissed.find((id) => {
        return data.id === id;
      });
      return !isValid;
    });
  };

  const dismissPosts = () => {
    setIsDismissed(true);
    dispatch(setAllPostsDismissed(cards.map(({ data: { id } }) => id)));
  };

  const loadMorePosts = () => {
    dispatch(fetchTopPosts(hasMorePostsId));
  };

  return (
    <Container isOpen={isOpen}>
      <ListContainer isDismissed={isDismissed}>
        {cards.map(({ data }) => (
          <Card key={data.id} {...data} />
        ))}
      </ListContainer>
      <Button
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
        }}
        text="Delete all"
        onClick={() => dismissPosts()}
      />
      <Button
        style={{
          position: "fixed",
          bottom: 20,
          left: 0,
          right: 0,
          width: "100%",
        }}
        text="Fetch more"
        onClick={() => loadMorePosts()}
      />
    </Container>
  );
};

export default CardList;
