import { Error, Loader } from 'components';
import { Container, Section } from 'components/App/App.styled';
import { RegisterForm } from 'components/RegisterForm';
import { useAuth } from 'hooks';

const Register = () => {
  const { isLoading, error } = useAuth();

  return (
    <Section>
      <Container>
        <h1>Registration</h1>
        <RegisterForm />
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

export default Register;
