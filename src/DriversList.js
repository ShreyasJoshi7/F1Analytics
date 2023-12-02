import React, {Component} from 'react';
import {  Table } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import AppNavBar from './AppNavBar';


class DriversList extends Component{

    

    state = {
        drivers:[],
        DriverName: "",
        year: "",
        grandPrix: ""
      };


    onChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
          });
        console.log(this.state)
      };

    onSubmit = (e) =>{
        e.preventDefault();
        
        this.fetchData();
    } // --- end onSubmit()

    async  fetchData() {
        console.log(this.state.DriverName, this.state.year, this.state.grandPrix);

        // all options are selected
        if(this.state.DriverName !== "" && this.state.year !== "" && this.state.grandPrix !== ""){
            console.log("all three");
            const response =  await fetch('/monkey/ByDriverYearAndGrandPrix',{method: 'POST',
                                                            body: JSON.stringify({DriverName: this.state.DriverName,
                                                                                Year: this.state.year,
                                                                                GrandPrix: this.state.grandPrix})
            });
            const body =   await response.json();
        
            this.setState({drivers: body});
            console.log(body);
            console.log(this.state.drivers)
            console.log(response.status);
        }

        // only DriverName is selected
        else if(this.state.DriverName !== "" && this.state.year === "" && this.state.grandPrix === ""){
            console.log("only DriverName");
            const response =  await fetch('/monkey/ByDriverName',{method: 'POST',
                                                            body: JSON.stringify({DriverName: this.state.DriverName,
                                                                                })
            });
            const body =   await response.json();
        
            this.setState({drivers: body});
            console.log(body);
            console.log(this.state.drivers)
            console.log(response.status);
        }

        // only Year is selected
        else if(this.state.DriverName === "" && this.state.year !== "" && this.state.grandPrix === ""){
            console.log("only year");
            const response =  await fetch('/monkey/ByYear',{method: 'POST',
                                                            body: JSON.stringify({Year: this.state.year,
                                                                                })
            });
            const body =   await response.json();
        
            this.setState({drivers: body});
            console.log(body);
            console.log(this.state.drivers)
            console.log(response.status);
        }

        // only GrandPrix is selected
        else if(this.state.DriverName === "" && this.state.year === "" && this.state.grandPrix !== ""){
            console.log("only gp");
            const response =  await fetch('/monkey/ByGrandPrix',{method: 'POST',
                                                            body: JSON.stringify({GrandPrix: this.state.grandPrix,
                                                                                })
            });
            const body =   await response.json();
        
            this.setState({drivers: body});
            console.log(body);
            console.log(this.state.drivers)
            console.log(response.status);
        }

        // only DriverName and Year are selected
        else if(this.state.DriverName !== "" && this.state.year !== "" && this.state.grandPrix === ""){
            console.log("driver + year");
            const response =  await fetch('/monkey/ByDriverNameAndYear',{method: 'POST',
                                                            body: JSON.stringify({DriverName: this.state.DriverName,
                                                                                    Year: this.state.year,
                                                                                })
            });
            const body =   await response.json();
        
            this.setState({drivers: body});
            console.log(body);
            console.log(this.state.drivers)
            console.log(response.status);
        }

        // only DriverName and GrandPrix are selected
        else if(this.state.DriverName !== "" && this.state.year === "" && this.state.grandPrix !== ""){
            console.log("driver + gp");
            const response =  await fetch('/monkey/ByDriverNameAndGrandPrix',{method: 'POST',
                                                            body: JSON.stringify({DriverName: this.state.DriverName,
                                                                                    GrandPrix: this.state.grandPrix
                                                                                })
            });
            const body =   await response.json();
        
            this.setState({drivers: body});
            console.log(body);
            console.log(this.state.drivers)
            console.log(response.status);
        }

        // only Year and GrandPrix are selected
        else if(this.state.DriverName === "" && this.state.year !== "" && this.state.grandPrix !== ""){
            console.log("year + gp");
            const response =  await fetch('/monkey/ByYearAndGrandPrix',{method: 'POST',
                                                            body: JSON.stringify({Year: this.state.year,
                                                                                    GrandPrix: this.state.grandPrix
                                                                                })
            });
            const body =   await response.json();
        
            this.setState({drivers: body});
            console.log(body);
            console.log(this.state.drivers)
            console.log(response.status);
        }

        // None are selected
        else{
            // do something
            window.alert("select soomething");
        }
        
        
    } // --- end of fetchData()

    async componentDidMount(){
        // console.log(this.state.driverName, this.state.year, this.state.grandPrix)
        // console.log(this.state)
        const response =  await fetch('/monkey/allDrivers',{method: 'GET'});
        const body =   await response.json();
        
        this.setState({drivers: body});
        console.log(body);
        console.log(response.status);

      } // -- end componentDidMount()


    listItems = () => 
        <Table>
            <tbody>
            <tr>
            <th scope="row">Driver</th>
            <th scope="row">Year</th>
            <th scope="row">GrandPrix</th>
            <th scope="row">QualifyingPosition</th>
            <th scope="row">RacePosition</th>
            <th scope="row">ChangeInPosition</th>
            </tr>
            {
            this.state.drivers.map((driver,i) =>(
                <tr>
                <td>{driver.driverName}</td>
                <td>{driver.year}</td>
                <td>{driver.grandPrix}</td>
                <td>{driver.qualifyingPosition}</td>
                <td>{driver.racePosition}</td>
                <td>{driver.changeInPosition}</td>
                </tr>
            ))
            }
            </tbody>
        </Table>


render(){
    

    return(
      <div className="Table">
        <AppNavBar />
        <Link to='/helloWorld'>hello</Link>
          <header className="Table-header">
            <div className="Table-intro">
                <h2>Drivers</h2>
                <div className='DropDownForm'>
                    <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={this.onSubmit}>
                        <div className="col-12">
                            <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                            <select className="form-select" id="DriverName" name="DriverName" onChange={this.onChange}>
                                <option value={"Driver"}>Driver</option>
                                <option value="Lewis Hamilton">Lewis Hamilton</option>
                                <option value="Max Verstappen">Max Verstappen</option>
                                <option value="George Russell">George Russell</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                            <select className="form-select" id="Year" name="year" onChange={this.onChange}>
                                <option value={"Year"}>Year</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                            <select className="form-select" id="GP" name="grandPrix" onChange={this.onChange}>
                                <option value={"GrandPrix"}>Grand Prix</option>
                                <option value="bahrain">Bahrain</option>
                                <option value="monaco">Monaco</option>
                                <option value="australia">Australia</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Get Data</button>
                        </div>
                    </form>
                </div><br /> 
              {this.listItems()}
              <p id="empty_response"></p>
            </div>
          </header>
      </div> 
    );
  }
}

export default DriversList;