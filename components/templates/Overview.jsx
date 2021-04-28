import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardList, Content, Button, UserInfo, Details } from '../index';
import styled from '@emotion/styled';
import { mq } from '../../utils/breakpoints';
import { AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const ListContainer = styled.div`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  height: 100vh;
  ${mq[0]} {
    width: 25%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
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
  width: 100%;
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

const REDDIT_HOST = process.env.NEXT_PUBLIC_REDDIT_HOST;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const CALLBACK_URI = process.env.NEXT_PUBLIC_CALLBACK_URI;

const Overview = () => {
  const [isOpen, setIsOpen] = useState(true);
  const payload = useSelector((state) => state.payload || []);
  const stateUser = useSelector((state) => state.user);
  const router = useRouter();

  const login = () => {
    return (
      router.push(`${REDDIT_HOST}/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=SUCCESS&redirect_uri=${CALLBACK_URI}&duration=permanent&scope=read+save+history+identity`)
    )
  }

  return (
    <Container>
      <ListContainer>
        {payload.length > 0 && <CardList data={payload} isOpen={isOpen} />}
      </ListContainer>
      <ContentContainer>
        <HeaderContainer>
          {stateUser && <UserInfo />}
          {!stateUser.name && <Button text="Login" onClick={() => login()} />}
          <StyledButton
            text={<AiOutlineMenu />}
            onClick={() => setIsOpen(!isOpen)}
          />
        </HeaderContainer>
        <Content />
        <Details />
      </ContentContainer>
    </Container>
  )
}

export default Overview;