import {
  LinkWrapper,
  StyledNavLink,
} from 'components/SharedLayout/SharedLayout.styled';

export const Navigation = () => {
  return (
    <nav>
      <LinkWrapper>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </li>
      </LinkWrapper>
    </nav>
  );
};
