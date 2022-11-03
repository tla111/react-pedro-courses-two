import React, { useState } from 'react';
import './App.css';
import { Person } from './Components/Person'

function App() {
  const [name, setName] = useState<string>("")
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
