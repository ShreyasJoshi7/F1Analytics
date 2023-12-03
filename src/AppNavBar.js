import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

// ""asdf" from UI 

export default class AppNavBar extends Component {


    render() {
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarBrand tag={Link} to="/helloWorld">Hello</NavbarBrand>
        </Navbar>;
    }
}
