import React, {Component} from 'react';
import AppNavBar from './AppNavBar';
import { Link } from 'react-router-dom';
import { Button, } from 'reactstrap';


class HelloWorld extends Component{

    render(){
        return(
            <div>
                <AppNavBar />
                <Button color="link"><Link to='/'>Home</Link></Button>
                new possibilities
            </div>
        );
    }
}

export default HelloWorld;