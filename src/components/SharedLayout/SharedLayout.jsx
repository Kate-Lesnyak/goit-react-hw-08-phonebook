import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { Container } from 'components/App/App.styled';
import { StyledSharedLayout, HeaderWrapper } from './SharedLayout.styled';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';

export const SharedLayout = () => {
  return (
    <>
      <StyledSharedLayout>
        <Container>
          <HeaderWrapper>
            <Navigation />
            <AuthNav />
          </HeaderWrapper>
        </Container>
      </StyledSharedLayout>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
