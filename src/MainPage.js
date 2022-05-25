import './App.scss'
import { Head } from './Components/Head';
import { Cart } from './Components/Cart';
import { PizzaList } from './Components/PizzaList';
import { Sort } from './Components/Sort';
import { useState } from 'react';
export const MainPage = () =>  {
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


