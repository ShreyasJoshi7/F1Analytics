
import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DriversList from './DriversList';
import HelloWorld from './HelloWorld';


class App extends Component{

  render(){


    return(
      <Router>
        <div>
        <Switch>
            <Route exact path='/monkey/allDrivers' component={DriversList}/>
            <Route path='/helloWorld' component={HelloWorld}/>
        </Switch>
      </div>
      </Router>
    );
  }
}



export default App;
