import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser, selectUserError, selectUserIsLoading } from 'redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectUserIsLoading)
  const error = useSelector(selectUserError);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    isLoading,
    error,
  };
};
