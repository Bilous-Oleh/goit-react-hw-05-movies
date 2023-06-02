import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-right: 20px;
  font-size: 16px;
`;

export const StyledButton = styled.button`
  border-radius: 4px;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  border: none;
  background: #ffffff;
  &:hover,
  &:focus {
    background-color: #0d57aa;
    color: #ffffff;
  }
`;
