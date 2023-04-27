/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Form, Link, NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    const { user,logOut } = useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error));
    }
    return (
        <Container>

            <div className='text-center'>

                <img src={logo} alt="" />
                <p className='text-second'><small>News Feed here</small></p>
                <p>{moment().format('dddd,MMMM D YYYYY')}</p>
            </div>
            <div className='d-flex'>
                <Button variant='danger' >Latest </Button>
                <Marquee className='text-danger'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            
                            <Link to='/orders'>Orders</Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='gap-2'>
                            {
                                user ? <>
                                    <span>{user.email}</span>
                                    <NavLink>
                                        <Button onClick={handleLogOut} variant='secondary'>SignOut</Button>
                                    </NavLink>
                                </> : 
                                <Link to='/login'>Login</Link>
                            }
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <NavLink to='/login'>
                                <Button variant='secondary'>Login</Button>
                            </NavLink>
                            <NavLink to='/register'>
                                <Button variant='secondary'>Register</Button>
                            </NavLink>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Container >
    );
};

export default Header;