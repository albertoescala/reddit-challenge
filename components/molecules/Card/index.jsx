import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Label, Image } from '../../index';
import {
  setPost,
  setPostVisited,
  setPostDismissed,
  setIsMenuOpen,
} from '../../../config/actions';
import {
  Container,
  CardContent,
  PreviewContainer,
  BlockContainer,
  VisitedStatus,
  PostTitle,
  DismissButton,
  AuthorLabel,
  TimeLabel,
  CommentLabel,
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
  const { postsVisited, isMenuOpen } = useSelector((state) => state);
  const dispatch = useDispatch();

  const setDetails = () => {
    dispatch(setPost({ author, thumbnail, title, score }));
    dispatch(setPostVisited(id));
    dispatch(setIsMenuOpen(!isMenuOpen))
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
                <AuthorLabel text={author} />
              </div>
              <TimeLabel text={`${moment.unix(created).fromNow()}`} />
            </BlockContainer>
            <BlockContainer>
              {thumbnail !== "default" && (
                <Image style={{ margin: '0 0 10px 0' }} src={thumbnail} width="50" height="50" />
              )}
              <PostTitle text={title} />
            </BlockContainer>
          </div>
          <BlockContainer>
            <DismissButton
              text={<><AiOutlineCloseCircle/> Dismiss Post</>}
              onClick={() => dismissPost()}
            />
            <CommentLabel text={`${num_comments} comments`} />
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
