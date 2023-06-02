import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
`;

export const StyledItem = styled.li`
  width: calc((100% - 5 * 40px) / 6);
  height: 400px;
  word-wrap: break-word;
  text-align: center;
`;

export const StyledInfo = styled.div`
  margin-top: 20px;
  max-width: 220px;
`;

export const StyledName = styled.h4`
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledText = styled.p`
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  max-width: 500px;
`;
