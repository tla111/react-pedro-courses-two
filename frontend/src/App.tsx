import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person
        name="Pedro"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["jessica", "jake", "jerry", "jasmine"]}
      />
    </div>
  );
}

export default App;
