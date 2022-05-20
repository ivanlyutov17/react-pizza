import './App.scss'
import { useState } from 'react';
import { Router } from './Router';
function App() {
  const [active,setActive] = useState('all'); 
  function makeActive(atrr){
    setActive(atrr);
  }

  return (
    <Router />
  );
}

export default App;
