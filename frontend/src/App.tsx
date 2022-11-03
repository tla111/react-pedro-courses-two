import React, { useState } from 'react';
import './App.css';
import { Person, Country } from './Components/Person'

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
        country={Country.Brazil}
      />
    </div>
  );
}

export default App;
