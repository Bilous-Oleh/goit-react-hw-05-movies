import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 20px 40px;
`;

export const StyledButton = styled.button`
  display: flex;
  width: 90px;
  height: 30px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px;
  border-radius: 4px;
  color: rgb(13, 87, 170);
  background: #ffffff;
  &:hover,
  &:focus {
    background-color: #0d57aa;
    color: #ffffff;
  }
`;
