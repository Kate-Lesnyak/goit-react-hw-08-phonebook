import styled from "styled-components";

import { NavLink } from 'react-router-dom';

export const StyledSharedLayout = styled.header`
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.backgroundColor}`};;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledNavLink = styled(NavLink)`
font-size: ${({ theme }) => theme.fontSizes.medium};
font-weight: 500;
padding: 8px 16px;
border-radius: ${({ theme }) => theme.spacing(1)};
text-decoration: none;
color: ${(({ theme }) => theme.colors.primaryTextColor)};

text-transform: uppercase;

transition-property: color, background-color;
transition: color ${(({ theme }) => theme.transition)}, background-color ${(({ theme }) => theme.transition)};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    background-color: ${(({ theme }) => theme.colors.accentColor)};
  }

  &.active {
  color: ${(({ theme }) => theme.colors.secondaryTextColor)};
  background-color: ${(({ theme }) => theme.colors.accentColor)};
}
`;

// с фильмов
export const Button = styled.button`
  color: ${({ theme }) => theme.colors.buttonTextColor};
  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.colors.accentColor}`};
  border-radius: ${({ theme }) => theme.spacing(2)};

  transition-property: color, background-color, box-shadow;
  transition: ${({ theme }) => `background-color ${theme.transition}, color ${theme.transition}, box-shadow ${theme.transition}`};

  &:hover, &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    background-color: ${({ theme }) => theme.colors.accentColor};
    box-shadow: ${({ theme }) => theme.boxShadow};
}
`;
