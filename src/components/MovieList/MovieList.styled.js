import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  padding: 0 40px;
  margin-bottom: 40px;
`;

export const StyledTitle = styled.h2`
  margin: 30px 0;
  font-size: 30px;
  font-weight: 600;
`;

export const StyledList = styled.ul`
  list-style: none;
  color: #0d57aa;
`;

export const StyledItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #0d57aa;
  &:hover,
  &:focus {
    color: #1c85ff;
    border-bottom: 2px solid #1c85ff;
  }
`;
