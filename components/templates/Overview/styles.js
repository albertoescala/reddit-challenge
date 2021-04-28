import styled from '@emotion/styled';
import { Button } from '../../index';
import { mq } from '../../../utils/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ListContainer = styled.div`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  height: 100vh;
  ${mq[0]} {
    width: 45%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
  }
  ${mq[1]} {
    width: 25%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
  }
`;

export const StyledButton = styled(Button)`
  display: block;
  z-index: 199;
  position: relative;
  ${mq[0]} {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  align-items: center;
  ${mq[0]} {
    width: 55%;
  }
  ${mq[1]} {
    width: 75%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;