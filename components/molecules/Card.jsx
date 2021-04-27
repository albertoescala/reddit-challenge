import moment from 'moment';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { Button, Label, Image } from '../index';
import { setPost } from '../../config/actions'

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

const Card = ({ author, created, thumbnail, title, num_comments, score }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <PreviewContainer>
        <div onClick={() => dispatch(setPost({ author, thumbnail, title, score }))}>
          <BlockContainer>
            <Label text={author} />
            <Label text={`${moment.unix(created).fromNow()}`} />
          </BlockContainer>
          <BlockContainer>
            <Image src={thumbnail} width="50" height="50" />
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