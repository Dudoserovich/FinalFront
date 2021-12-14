import React, {Component} from "react";

import '../styles/App.css';
const logo = require('../assets/logo.png')

import {Navbar, Nav, Container} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

class Header extends Component {

    render() {
        return (
            <>
                <Router>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            Cut in picture
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={NavLink} to="/" exact>
                                    Home
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/about">
                                    About me
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/portfolio">
                                    Portfolio
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/portfolio" component={Portfolio}/>
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Header;