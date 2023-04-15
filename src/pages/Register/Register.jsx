import { Container, Section } from 'components/App/App.styled';
import { RegisterForm } from 'components/RegisterForm';

const Register = () => {
  return (
    <Section>
      <Container>
        <h1>Registration</h1>
        <RegisterForm />
      </Container>
    </Section>
  );
};

export default Register;
