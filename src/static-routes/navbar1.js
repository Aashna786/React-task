import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

const Navb = ()=>{
   const linkStyle = {textDecoration:"none",color:"white"};
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} style={linkStyle} to="/">Home</Nav.Link>
            <Nav.Link as={Link} style={linkStyle} to="/About">About</Nav.Link>
            <Nav.Link as={Link} style={linkStyle} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Navb