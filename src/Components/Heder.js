import React, { Component } from 'react';
import { Button, FormControl, Nav, Navbar, Container, Form, NavLink } from 'react-bootstrap';
import logo from '../img/logo192.png'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';




export default class Heder extends Component {
    render() {
        return (
            <div>
                <Navbar  collapseOnSelect expand='md' bg="dark" variant='dark'> //collapseOnSelect - делает бургер-меню
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                all="Logo"
                            />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className='me-auto'>
                                <NavLink className='active' href="/">Home</NavLink>
                                <NavLink className='active' href="/about">About us</NavLink>
                                <NavLink className='active' href="/contacts">Contacts</NavLink>
                                <NavLink className='active' href="/blog">Blog</NavLink>
                            </Nav>

                            <Form className='d-flex'>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts' element={<Contacts />} />
                        <Route path='/blog' element={<Blog />} />
                    </Routes>
                </Router>



            </div>
        )
    }
}
