import { Container, Section } from 'components/App/App.styled';
import { LoginForm } from 'components/LoginForm';

const Login = () => {
  return (
    <Section>
      <Container>
        <h1>Log in</h1>
        <LoginForm />
      </Container>
    </Section>
  );
};

export default Login;
