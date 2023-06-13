import React from 'react';
import Nag from './components/Bob.js'
function App() {
  const age=10;
  return (
    <div>
    <h1>greetings</h1>
      <Nag name='elil' age={10+16}/>
      <Nag name='elil' age={age}/>
    </div>
  );
}

export default App;
