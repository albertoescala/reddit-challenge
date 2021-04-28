import styled from '@emotion/styled';

const StyledButton = styled.button`
  font-size: 10px;
  background-color: #ce7e1b;
  cursor: pointer;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  :active {
    background-color: #ea972f;
  }
  transition: all .2s;
`;

const Button = ({ text, ...props }) => {
  return (
    <StyledButton {...props}>
      {text}
    </StyledButton>
  )
}

export default Button;
