import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Main from './main/Main';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Header() {
const Navigation = () =>{
  return(
    <Navbar collapseOnSelect className='primary' expand="md"  variant="dark">
    <Container className='navbar' >
      <Navbar.Brand className='d-flex brand' href=""><div className="logo"> </div>Hoo<span className="bank">Bank</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <AnchorLink className='nav-link'href="#home">Home</AnchorLink>
          <AnchorLink className='nav-link' href="#about">
            About Us
          </AnchorLink>
          <AnchorLink className='nav-link' href="#features">
            Features
          </AnchorLink>
          <AnchorLink className='nav-link'  href="#client">
            Clients
          </AnchorLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
  return (
    <>
<Navigation/>
<Main/>
</>
  );
}

export default Header;