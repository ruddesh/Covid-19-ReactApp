import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

window.arr = [];
class Example extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmed: 0,
            recovered: 0,
            deaths: 0,
            countries: [],
            data: [],
            activeCountry: 'world'
        };
        this.getCountryData = this.getCountryData.bind(this);
         const foo = React.createContext('name')
    }

    async componentDidMount() {
        const api = 'https://covid19.mathdro.id/api';

        const countries = [];
        const countriesApi = 'https://covid19.mathdro.id/api/countries';
        const response1 = await fetch(countriesApi);
        const countryNames = await response1.json();
        for(let i in countryNames.countries) {
            countries.push(countryNames.countries[i].name)
        }

        const response = await fetch(api);
        const data = await response.json();
        this.setState({
            confirmed: data.confirmed.value,
            deaths: data.deaths.value,
            recovered: data.recovered.value,
            countries: countries

        });
    }

    renderCountriesSelect(){
        return this.state.countries.map((country, i) => {
            return <option key={i}>{country}</option>
        });
    }

    async getCountryData(e){
        const countr = e.target.value;

        const api = 'https://covid19.mathdro.id/api/countries/'+ e.target.value;
        const response = await fetch(api);
        const data = await response.json();
        this.setState({
            confirmed: data.confirmed.value,
            deaths: data.deaths.value,
            recovered: data.recovered.value,
            data: {
                [countr]: data
            },
            activeCountry: countr
        });
        const comData = {};
        comData[countr] = data;
        // window.arr[countr] = data;
        window.arr.push(comData);
    }


    render () {     
        if(window.arr.length > 0){
            console.log(window.arr[2]);
            console.log(window.arr.length);
        }
    return (
        <div className="container">
            <div className="row justify-content-center">
                    <div className="container paddingTop">
                        <div className="row">
                            <h3>Covid 19 Application </h3>
                            <div className="col col-lg-8">
                                <select onChange={this.getCountryData}>
                                    {this.renderCountriesSelect()}
                                </select>       
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{this.state.activeCountry}</h5>
                            <div className="row">
                                <div className="jumbotron">
                                    <div className="row">
                                        <div className="col-sm-3 d-flex">
                                            <div className="card card-body flex-fill">
                                              <div className="under-title">{this.state.confirmed} <br/> confirmed</div>   
                                            </div>
                                        </div> 
                                        <div className="col-sm-3 d-flex">
                                            <div className="card card-body flex-fill">
                                              <div className="under-title">{this.state.recovered} <br/> recovered</div>   
                                            </div>
                                        </div> 
                                        <div className="col-sm-3 d-flex">
                                            <div className="card card-body flex-fill">
                                              <div className="under-title">{this.state.deaths} <br/> deaths</div>   
                                            </div>
                                        </div>        
                                        <div className="col-sm-3 d-flex">
                                            <div className="card card-body flex-fill">
                                              <div className="under-title">{this.state.confirmed - this.state.recovered - this.state.deaths} <br/> active</div>   
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
            </div>
        </div>
    ); 
    }
    
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
