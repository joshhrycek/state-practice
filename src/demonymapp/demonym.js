import React, { Component } from 'react';
import './demonym.css'


import CountrySelector from './countrySelector';


class Demonym extends Component {
  render() {
    return (
      <div className="demonym_app">
        <CountrySelector countries={[{name:"Barbados"}, {name:"Bahrain"}]}/>
        <Demonym name="Barbadian" country="Barbados"/>
      </div>
    );
  }
}

export default Demonym;