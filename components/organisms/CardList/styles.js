import styled from '@emotion/styled';
import { mq } from '../../../utils/breakpoints';
import { Button } from '../../index';

export const Container = styled.div`
  transform: ${(props) =>
    props.isOpen ? "translateX(-900px)" : "translateX(0px)"};
  position: absolute;
  transition: all 0.5s;
  height: 100vh;
  width: 100%;
  background-color: #ccc;
  z-index: 99;
  ${mq[0]} {
    position: relative;
    display: flex;
    opacity: 1;
    transform: translateX(0px);
    flex-direction: column;
  }
`;

export const ListContainer = styled.div`
  opacity: ${(props) => (props.isDismissed ? "0" : "1")};
  transform: ${(props) =>
    props.isDismissed ? "translateX(-100px)" : "translateX(0px)"};
  width: 100%;
  transition: all 0.5s;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  width: 100%;
  ${mq[0]} {
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledButton = styled(Button)`
  padding: 10px;
  width: 50%;
  font-size: 15px;
  border: 1px solid;
  border-radius: 0;
`;