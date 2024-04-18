import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>
                React TypeScript
            </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
