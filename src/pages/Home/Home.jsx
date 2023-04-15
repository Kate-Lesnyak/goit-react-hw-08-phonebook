import { Container, Section } from 'components/App/App.styled';
import { StyledHomePage } from './Home.styled';

const Home = () => {
  return (
    <Section>
      <Container>
        <h1>Phone book</h1>
        <StyledHomePage>Welcome to the сontact manager!</StyledHomePage>
      </Container>
    </Section>
  );
};

export default Home;
