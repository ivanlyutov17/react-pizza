import './App.scss'
import { Head } from './Head';
import { Cart } from './Cart';
import { PizzaList } from './PizzaList';
import { Sort } from './Sort';
import { useState } from 'react';
import { useSelector } from 'react-redux';
function App() {
  const [active,setActive] = useState('all'); 
  function makeActive(atrr){
    setActive(atrr);
  }

  return (


    <div className="App">
      <div className="wrapper">
      <div className="header">
        <div className="container">
      <Head/>
      <Cart/>
      </div>
      </div>
      <div className="content">
        <div className="container">
          <Sort active={active} setActive={(atrr)=>makeActive(atrr)}/>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaList active={active}/>       
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
