import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { Button, Label, Image } from '../index';
import { setPost, setPostVisited } from '../../config/actions'

const Container = styled.div`
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
`;

const BlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

const VisitedStatus = styled.div`
  width: 2px;
  height: 2px;
  padding: 5px;
  background-color: lightblue;
  border-radius: 100%;
  position: absolute;
`;

const Card = ({ author, created, thumbnail, title, num_comments, score, id }) => {
  const postsVisited = useSelector((state) => state.postsVisited)
  const dispatch = useDispatch();

  const setDetails = () => {
    dispatch(setPost({ author, thumbnail, title, score }));
    dispatch(setPostVisited(id));
  }

  const renderStatus = () => {
    const isVisited = postsVisited.find((postId) => postId === id);
    if (!isVisited) {
      return <VisitedStatus />
    }
    return;
  }

  return (
    <Container>
      <PreviewContainer>
        <div onClick={() => setDetails()}>
          <BlockContainer>
            <div style={{ display: 'flex', position: 'relative' }}>
              {renderStatus()}
              <Label text={author} />
            </div>
            <Label text={`${moment.unix(created).fromNow()}`} />
          </BlockContainer>
          <BlockContainer>
            {thumbnail !== 'default' && <Image src={thumbnail} width="50" height="50" />}
            <Label text={title} />
          </BlockContainer>
        </div>
        <BlockContainer>
          <Button text="Dismiss Post" onClick={() => console.log('AEA')} />
          <Label text={`${num_comments} comments`} />
        </BlockContainer>
      </PreviewContainer>
      <div>
        <Label text=">" style={{ fontSize: '30px', padding: '0 15px' }} />
      </div>
    </Container>
  )
};

export default Card;