import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { Button, Label, Image } from '../../index';
import {
  setPost,
  setPostVisited,
  setPostDismissed,
} from '../../../config/actions';
import {
  Container,
  CardContent,
  PreviewContainer,
  BlockContainer,
  VisitedStatus,
} from './styles';

const Card = ({
  author,
  created,
  thumbnail,
  title,
  num_comments,
  score,
  id,
}) => {
  const [isShowed, setIsShowed] = useState(true);
  const postsVisited = useSelector((state) => state.postsVisited);
  const dispatch = useDispatch();

  const setDetails = () => {
    dispatch(setPost({ author, thumbnail, title, score }));
    dispatch(setPostVisited(id));
  };

  const renderStatus = () => {
    const isVisited = postsVisited.find((postId) => postId === id);
    if (!isVisited) {
      return <VisitedStatus />;
    }
    return;
  };

  const dismissPost = () => {
    setIsShowed(false);
    dispatch(setPostDismissed(id));
  };

  return (
    <Container isShowed={isShowed}>
      <CardContent isShowed={isShowed}>
        <PreviewContainer>
          <div onClick={() => setDetails()}>
            <BlockContainer>
              <div style={{ display: "flex", position: "relative" }}>
                {renderStatus()}
                <Label text={author} />
              </div>
              <Label text={`${moment.unix(created).fromNow()}`} />
            </BlockContainer>
            <BlockContainer>
              {thumbnail !== "default" && (
                <Image src={thumbnail} width="50" height="50" />
              )}
              <Label text={title} />
            </BlockContainer>
          </div>
          <BlockContainer>
            <Button text="Dismiss Post" onClick={() => dismissPost()} />
            <Label text={`${num_comments} comments`} />
          </BlockContainer>
        </PreviewContainer>
        <div onClick={() => setDetails()}>
          <Label text=">" style={{ fontSize: "30px", padding: "0 15px" }} />
        </div>
      </CardContent>
    </Container>
  );
};

export default Card;
