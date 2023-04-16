import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { StyledButton, StyledText, StyledWrapperUser } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <StyledWrapperUser>
      <StyledText>
        <b>Welcome, {user.name}</b>
      </StyledText>
      <StyledButton type="button" onClick={() => dispatch(logOut())}>
        Log out
      </StyledButton>
    </StyledWrapperUser>
  );
};
