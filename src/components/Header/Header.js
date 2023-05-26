import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import logo from '../../assets/logo.jpg';

function Header() {
  return (
    <Navbar
    bg="light"
    expand="lg"
    className="navbar"
    fixed="top"
    style={{
      backgroundColor: "black ", 
      display: "flex",
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
    }}
  >
      <Container>
        <Navbar.Brand style={{display:'flex' ,  color: "white", marginRight: "40px" }}>
     <img src={logo} alt='logo' style={{height:'50px'}} />

            <h6 className="logo">TANTUM PROJECTS</h6>
        
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ background: "white" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ flexGrow: 1 }}></Nav>
          <Nav style={{ display: "flex", gap: "20px" }}>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="link"
            >
              <h6>HOME</h6>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="link"
            >
              <h6>ABOUT US</h6>
            </Link>
            <Link
              activeClass="active"
              to="whatwedo"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="link"
            >
              <h6>WHAT WE DO</h6>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="link"
            >
              <h6>PROJECTS</h6>
            </Link>
            <Link
              activeClass="active"
              to="blogs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="link"
            >
              <h6>BLOGS</h6>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="link"
            >
              <h6>CONTACT</h6>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
