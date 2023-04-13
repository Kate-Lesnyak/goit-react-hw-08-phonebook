import {
  LinkWrapper,
  StyledNavLink,
} from 'components/SharedLayout/SharedLayout.styled';

export const AuthNav = () => {
  return (
    <LinkWrapper>
      <li>
        <StyledNavLink to="/register">Registration</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/login">Log in</StyledNavLink>
      </li>
    </LinkWrapper>
  );
};
