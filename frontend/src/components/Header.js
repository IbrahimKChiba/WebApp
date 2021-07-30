import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
            //bg="primary" variant="light" expand="lg"

function Header() {
    return (
        <header>

            <Navbar  bg='primary' variant='dark' expand='lg' collapseOnSelect >
                <Container >
                            <LinkContainer to='/' >
                            <Navbar.Brand> Cabinet de conseil </Navbar.Brand>
                            </LinkContainer>
                      
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto"> 
                                            <LinkContainer to='/'  >
                                            <Nav.Link><i className="fas fa-home"></i> Accueil </Nav.Link>
                                            </LinkContainer>
                                        </Nav>

                                        <Nav className="ml-auto">
                                            <LinkContainer to='/favorites' >
                                                <Nav.Link ><i className="fas fa-award"></i> Liste des favoris</Nav.Link>
                                            </LinkContainer>

                                            <LinkContainer to='/login' >                                                
                                                <Nav.Link ><i className="fas fa-user"></i> Se Connecter</Nav.Link>
                                            </LinkContainer>
                                        </Nav>
                                
                                </Navbar.Collapse>
                        
                                                   
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
