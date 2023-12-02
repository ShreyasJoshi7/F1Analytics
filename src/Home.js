import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import { Button, Container, Navbar } from 'reactstrap';

import AppNavBar from './AppNavBar';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavBar />
                <Container fluid>
                    <Button color="link"><Link to='/drivers-list'>Clients</Link></Button>
                </Container>
            </div>
        );
    }
}
export default Home;