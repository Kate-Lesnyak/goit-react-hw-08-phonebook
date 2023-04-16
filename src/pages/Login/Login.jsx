import { Error, Loader } from 'components';
import { Container, Section } from 'components/App/App.styled';
import { LoginForm } from 'components/LoginForm';
import { useAuth } from 'hooks';

const Login = () => {
  const { isLoading, error } = useAuth();

  return (
    <Section>
      <Container>
        <h1>Log in</h1>
        <LoginForm />
        {isLoading && <Loader />}
        {error && (
          <b>
            <Error error={error} />
          </b>
        )}
      </Container>
    </Section>
  );
};

export default Login;
