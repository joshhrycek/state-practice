import React from 'react';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb';
// import Roulette from './state-drills/Roulette'
// import Tabs from './state/Tabs'
// import tabsProp from './Store'
import Accord from './state-drills/Accord'
import sections from './Store'

function App() {
  return (
    <main className='App'>
      {/* <TheDate /> */}
      {/* <Counter count= {123}/> */}
      {/* <HelloWorld /> */}
      {/* <Bomb /> */}
      {/* <Roulette /> */}
      {/* <Tabs tabs= {tabsProp} prop1={"fuck you"}/> */}
      <Accord sections={sections}/>
    </main>
  );
}

export default App;