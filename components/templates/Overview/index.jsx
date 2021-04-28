import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardList, Content, Button, UserInfo, Details } from '../../index';
import { AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from 'next/router';
import {
  Container,
  ListContainer,
  StyledButton,
  ContentContainer,
  HeaderContainer,
} from './styles';

const REDDIT_HOST = process.env.NEXT_PUBLIC_REDDIT_HOST;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const CALLBACK_URI = process.env.NEXT_PUBLIC_CALLBACK_URI;

const Overview = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { posts = [], user } = useSelector((state) => state);
  const router = useRouter();

  const login = () => {
    return router.push(
      `${REDDIT_HOST}/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=SUCCESS&redirect_uri=${CALLBACK_URI}&duration=permanent&scope=read+save+history+identity`
    );
  };

  return (
    <Container>
      <ListContainer>
        {posts.length > 0 && <CardList isOpen={isOpen} />}
      </ListContainer>
      <ContentContainer>
        <HeaderContainer>
          {user && <UserInfo />}
          {!user.name && <Button style={{ padding: '5px 15px', fontSize: '14px' }} text="Login" onClick={() => login()} />}
          <StyledButton
            text={<AiOutlineMenu />}
            onClick={() => setIsOpen(!isOpen)}
          />
        </HeaderContainer>
        <Content />
        <Details />
      </ContentContainer>
    </Container>
  );
};

export default Overview;
