import styled from '@emotion/styled';

export const Container = styled.div`
  opacity: ${(props) => (!props.isShowed ? "0" : "1")};
  transform: ${(props) =>
    !props.isShowed ? "translateX(-100px)" : "translateX(0px)"};
  transition: all 0.5s;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: ${(props) => (!props.isShowed ? "absolute" : "relative")};
  transition: position 3s 50s;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
`;

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const VisitedStatus = styled.div`
  width: 2px;
  height: 2px;
  padding: 5px;
  background-color: lightblue;
  border-radius: 100%;
  position: absolute;
`;
