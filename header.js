import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../images/besta2.png';
import Members from '../pages/members';
import About from '../pages/about';
import Gallery from '../pages/gallery';
import Marriage from'../pages/marriage';
import Profile from '../pages/profile';
import Login from '../pages/login';
import Account from '../pages/createAcc';
import Signup  from '../pages/signup';
import Home from '../components/home';


import {
	
	Route,
	Link,
	Routes,
  
	
} from "react-router-dom";
function NavScrollExample() {
  return (
    <> 
 
    <Navbar expand="lg" className="bg-info sticky-top" >
      <Container >
        <Navbar.Brand href="#" className='text-dark fw-bold  w-auto fs-1'>
        <img
              alt="Besta"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-center m-3 w-auto rounded-3 "
            />{' '} Besta
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="mx-auto text-center text-white fw-bold fs-6 gap-4"
           
            navbarScroll
          >
            <Nav.Link as ={Link} to = "/Home" className= "nav-link"   >Home</Nav.Link>
            <Nav.Link as ={Link} to = "/members" className= "nav-link" >Members</Nav.Link>
            <Nav.Link as ={Link} to = "/gallery" className= "nav-link" >Gallery</Nav.Link>
            <Nav.Link as ={Link} to = "/profile" className= "nav-link" >Profiles</Nav.Link>
            <Nav.Link as ={Link} to = "/marriage" className= "nav-link" >Marriage</Nav.Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown" className="dropdown text-center">
            <Nav.Link as ={Link} to = "/login" className= "nav-link1 text-center" >Login</Nav.Link>
            <Nav.Link as ={Link} to = "/signup" className= "nav-link1 text-center" >Sign Up</Nav.Link>
            <Nav.Link as ={Link} to = "/account" className= "nav-link1 text-center" >Create Profile</Nav.Link>
              
              
            </NavDropdown>
            <Nav.Link as ={Link} to = "/about" className= "nav-link " >About us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
      <Routes>
        
        <Route path="/Home" element = {<Home/>}></Route>
        <Route path="/members" element = {<Members/>}></Route>
        <Route path="/gallery" element = {<Gallery/>}></Route>
        <Route path="/profile" element = {<Profile/>}></Route>
        <Route path="/marriage" element = {<Marriage/>}></Route>
        <Route path="/login" element = {<Login />}></Route>
        <Route path="/signup" element = {<Signup/>}></Route>
        <Route path="/account" element = {<Account/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        
      </Routes>
    </>
    
  );
}

export default NavScrollExample;



