import { useAuth } from 'hooks';
import {
  LinkWrapper,
  StyledNavLink,
} from 'components/SharedLayout/SharedLayout.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkWrapper>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        {isLoggedIn && (
          <li>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          </li>
        )}
      </LinkWrapper>
    </nav>
  );
};
