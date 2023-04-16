import styled from 'styled-components';

export const StyledHomePage = styled.p`
font-size: ${({ theme }) => theme.spacing(8)};
font-weight: 500;
text-align: center;
text-transform: uppercase;
color: ${({ theme }) => theme.colors.primaryTextColor};
`;
