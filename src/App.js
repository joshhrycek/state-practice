import React, { Component } from 'react';
// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb';
// import Roulette from './state-drills/Roulette';
// import Accord from './state-drills/Accord'
// import sections from './AccordStore'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Accord sections={sections} />
      </div>
    );
  }
}

export default App;