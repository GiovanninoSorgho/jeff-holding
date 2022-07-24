import logo from '../logo.svg';
import { useState, useEffect } from "react"
import {Navbar, Container, Nav, NavDropdown, ButtonGroup, NavLink} from "react-bootstrap";
// import App from "./App";
import {BrowserRouter, Routes, Link, Route, useRoutes, useNavigate } from 'react-router-dom';
// import Switch from 'react-bootstrap-switch';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
// import { useNavigate } from "react-router-dom";
import salon from '../pages/salon'



export const NavBar = () => {
    // const[activeLink, setActiveLink] = useState('test')
    // const onUpdatedActiveLink = (value) => {
    //     setActiveLink(value);
    // }
    // redirect()=>{
    //     let url="/test"
    //     let hisory=useHistory(),
    //     history.push(url),
    // }
    

    return(
        <BrowserRouter>
        <Navbar  bg="dark" variant="dark" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={logo} width="40px" height="40px" />{' '}
                    Jeff Holding
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title='Produits'>
                            <NavDropdown.Item htref="Produits/ergo">Ergonomique</NavDropdown.Item>
                            <NavDropdown.Item href="Produits/noergo">Non ergonomique</NavDropdown.Item>
                        </NavDropdown>

                        {/* <Nav.Link href="test">Test</Nav.Link> */}
                        {/* className={activeLink === 'test' ? 'active navbar-link' : 'navbar-link'} onClick={() ==> onUpdatedActiveLink('test')} */}
                        
                        
                        <NavDropdown title='Pieces'>
                            <NavDropdown.Item href="Pieces/bureau">Bureau</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/salon"}>Salon</NavDropdown.Item>
                            <NavDropdown.Item href="Pieces/manger">Salle a manger</NavDropdown.Item>
                            <NavDropdown.Item href="Pieces/chambre">Chrambre</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/contact">Contact</Nav.Link>

                        {/* <Link to="/salon">Salooon</Link> */}

                        <NavDropdown title='Horaires'>
                            <NavDropdown.Item href="">Lundi: 8h-18h</NavDropdown.Item>
                            <NavDropdown.Item href="">Mardi: 8h-18h</NavDropdown.Item>
                            <NavDropdown.Item href="">Mercredi: 8h-18h</NavDropdown.Item>
                            <NavDropdown.Item href="">Jeudi: 8h-18h</NavDropdown.Item>
                            <NavDropdown.Item href="">Vendredi: 8h-18h</NavDropdown.Item>
                            <NavDropdown.Item href="">Samedi: 9h-14h</NavDropdown.Item>
                            <NavDropdown.Item href="">Dimanche: Fermer</NavDropdown.Item>

                        </NavDropdown>

                        <Nav.Link href="">Panier</Nav.Link> 


                    </Nav>
                </Navbar.Collapse>                
            </Container>

            
            </Navbar>


            <Routes>

                <Route path="/salon" element={<salon />} />
                <Route path='../pages/noergo' element={<noergo />} />

                <Route path='../src/pages/ergo' element={<ergo />} />


                <Route path='/test' element={<test />} />

            </Routes>




        </BrowserRouter>
    
    )
}