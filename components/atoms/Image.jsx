import styled from '@emotion/styled';

const StyledImage = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 90px;
  height: 90px;
  background-color: #fff;
`;

const Image = ({...props}) => {
  return <StyledImage {...props} />
}

export default Image;