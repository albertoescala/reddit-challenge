import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../../index';
import { setAllPostsDismissed } from '../../../config/actions';
import { fetchTopPosts } from '../../../config/services';
import { Container, ListContainer, StyledButton } from './styles';

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
    setIsDismissed(false);
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

  const loadMorePosts = async () => {
    await dispatch(fetchTopPosts(hasMorePostsId));
  };

  return (
    <Container isOpen={isOpen}>
      <ListContainer isDismissed={isDismissed}>
        {cards.map(({ data }) => (
          <Card key={data.id} {...data} />
        ))}
        <div style={{ paddingTop: '39px' }} />
      </ListContainer>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          width: "100%",
        }}
      >
        <StyledButton
          text="Dismiss all"
          onClick={() => dismissPosts()}
        />
        <StyledButton
          text="Fetch more"
          onClick={() => loadMorePosts()}
        />
      </div>
    </Container>
  );
};

export default CardList;
