import styled from '@emotion/styled';
import { Label, Button } from '../../index';

export const Container = styled.div`
  opacity: ${(props) => (!props.isShowed ? "0" : "1")};
  transform: ${(props) =>
    !props.isShowed ? "translateX(-1000px)" : "translateX(0px)"};
  transition: all 0.5s;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: ${(props) => (!props.isShowed ? "absolute" : "relative")};
  transition: position 50s 5000s;
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
  background-color: #13a6d2;
  border-radius: 100%;
  position: absolute;
`;

export const PostTitle = styled(Label)`
  text-overflow: ellipsis;
  overflow: hidden; 
  width: 160px; 
  height: 1.2em; 
  white-space: nowrap;
  text-align: right;
`
export const DismissButton = styled(Button)`
  font-weight: initial;
  font-size: 14px;
`

export const AuthorLabel = styled(Label)`
  font-size: 14px;
  color: #be4539;
  font-weight: bold;
  font-style: italic;
  margin: 15px 0;
`;

export const TimeLabel = styled(Label)`
  font-size: 15px;
  margin: 15px 0;
  font-weight: bold;
`

export const CommentLabel = styled(Label)`
  color: #ce7f1a;
  font-size: 20px;
  margin: 0;
  padding: 7px 0;
`