import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;

export const StyledImage = styled.img`
  height: 400px;
  width: 300px;
`;

export const StyledInfo = styled.div`
  padding-top: 20px;
  padding-right: 20px;
`;

export const StyledName = styled.h2`
  margin-bottom: 20px;
`;

export const StyledText = styled.p`
  line-height: 1.5;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StyledMovieInfo = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
`;

export const StyledMoreInfo = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
`;

export const StyledHeader = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;

export const StyledList = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  font-size: 18px;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  padding: 6px 18px;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: #0d57aa;

  &:hover,
  &:focus {
    background-color: #0d57aa;
    color: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  }
`;
