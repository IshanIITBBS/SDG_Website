import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className='mainpage'>
      <Container>
        <Navbar.Brand href="/" className='icon'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/feature"  className='icon'>Features</Nav.Link>
            <Nav.Link href="/pricing"  className='icon'>Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown"  className='icon'>
              <NavDropdown.Item href="/action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="/action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/action/3.3" >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/deets"  className='icon'>More deets</Nav.Link>
            <Nav.Link eventKey={2} href="/memes"  className='icon'>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;