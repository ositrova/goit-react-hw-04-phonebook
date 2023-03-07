import { Container, Main } from './Layout.style';

export const Layout = ({ children }) => {
    return (
      <Container>
        <Main>{children}</Main>
      </Container>
    );
  };