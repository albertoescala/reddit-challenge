import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardList, Content, Button, UserInfo } from '../index';
import styled from '@emotion/styled';
import { mq } from '../../utils/breakpoints';
import { AiOutlineMenu } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const ListContainer = styled.div`
  width: 25%;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  ${mq[0]} {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledButton = styled(Button)`
  display: block;
  z-index: 199;
  position: relative;
  ${mq[0]} {
    display: none;
  }
`;

const ContentContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mq[0]} {
    width: 75%;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

const Overview = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { payload } = useSelector((state) => ({
    payload: state.payload,
  }));

  return (
    <Container>
      <ListContainer>
        <CardList data={payload || []} isOpen={isOpen} />
      </ListContainer>
      <ContentContainer>
        <HeaderContainer>
          <UserInfo />
          <StyledButton
            text={<AiOutlineMenu />}
            onClick={() => setIsOpen(!isOpen)}
          />
        </HeaderContainer>
        <Content />
      </ContentContainer>
    </Container>
  )
}

export default Overview;