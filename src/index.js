import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const defaultState={
    pizzas : [],
    price:0,
    openCart:false,
    sort:'популярности',
}



const reducer = (state = defaultState,action)=>{
      switch(action.type){
        case 'ADD_PIZZA':
        return {...state,pizzas:[...state.pizzas,action.payload],price:state.pizzas.reduce(
          (prevValue, currentValue) => prevValue + currentValue.price,
          0
        )+action.payload.price}

        case 'DELETE_ALL_PIZZA':
          return {...defaultState}

          case 'CHANGE_CART':
            return {...state,openCart:!state.openCart}


            case 'CHANGE_SORT':
              return{...state,sort:action.payload}

        default:return state
      }
}
const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>

    <App />
    </Provider>

  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
