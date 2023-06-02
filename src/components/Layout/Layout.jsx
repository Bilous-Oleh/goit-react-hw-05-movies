import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledNavLink } from './Layout.styled';
import { Loading } from '../Loading/Loading';

const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledHeader>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
