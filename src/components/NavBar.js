// import logo from '../logo.svg';
import logo from '../logojeff.svg'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {  Link } from 'react-router-dom';



export const NavBar = () => {
    


    return (
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>
                        <img src={logo} width="40px" height="40px" />{' '}
                        Jeff Holding
                    </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title='Produits'>
                            <NavDropdown.Item as={Link} to={"/Ergo"}>Ergonomique</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/Noergo"}>Non ergonomique</NavDropdown.Item>
                        </NavDropdown>

                       

                        <NavDropdown title='Pieces'>


                            <NavDropdown.Item as={Link} to={"/Bureau"}>Bureau</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/Salon"}>Salon</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/SalleaManger"}>Salle a Manger</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/Chambre"}>Chrambre</NavDropdown.Item>
                        </NavDropdown>


                            <NavDropdown title='Contact'>
                                <NavDropdown.Item href="/">+1(613)1111111</NavDropdown.Item>
                                <NavDropdown.Item href="/">jeffholdimg@gmail.com</NavDropdown.Item>
                            </NavDropdown>


                            <NavDropdown title='Horaires'>
                                <NavDropdown.Item href="">Lundi: 8h-18h</NavDropdown.Item>
                                <NavDropdown.Item href="">Mardi: 8h-18h</NavDropdown.Item>
                                <NavDropdown.Item href="">Mercredi: 8h-18h</NavDropdown.Item>
                                <NavDropdown.Item href="">Jeudi: 8h-18h</NavDropdown.Item>
                                <NavDropdown.Item href="">Vendredi: 8h-18h</NavDropdown.Item>
                                <NavDropdown.Item href="">Samedi: 9h-14h</NavDropdown.Item>
                                <NavDropdown.Item href="">Dimanche: Fermer</NavDropdown.Item>

                            </NavDropdown>

                            {/* <Nav.Link href="">Panier</Nav.Link> */}


                        </Nav>
                    </Navbar.Collapse>
                </Container>


            </Navbar>


    )
}