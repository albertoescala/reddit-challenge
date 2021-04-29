import { useSelector, useDispatch } from 'react-redux';
import { CardList, Content, Button, UserInfo, Details } from '../../index';
import { setIsMenuOpen } from '../../../config/actions';
import { IconContext } from 'react-icons';
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
  const { posts = [], user, isMenuOpen } = useSelector((state) => state);
  const router = useRouter();
  const dispatch = useDispatch()

  const login = () => {
    return router.push(
      `${REDDIT_HOST}/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=SUCCESS&redirect_uri=${CALLBACK_URI}&duration=permanent&scope=read+save+history+identity`
    );
  };

  return (
    <Container>
      <ListContainer>
        {posts.length > 0 && <CardList isOpen={isMenuOpen} />}
      </ListContainer>
      <ContentContainer>
        <HeaderContainer>
          {user && <UserInfo />}
          {!user.name && <Button style={{ padding: '5px 15px', fontSize: '14px' }} text="Login" onClick={() => login()} />}
          <StyledButton
            text={
              <IconContext.Provider value={{ size: '2em' }}>
                <AiOutlineMenu />
              </IconContext.Provider>
            }
            onClick={() => dispatch(setIsMenuOpen(!isMenuOpen))}
          />
        </HeaderContainer>
        <Content />
        <Details />
      </ContentContainer>
    </Container>
  );
};

export default Overview;
