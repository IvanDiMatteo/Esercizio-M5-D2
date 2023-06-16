import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid className='mx-0'>
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
    );
  }
}

export default MyNav;