import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const defaultState={
    pizzas : [],
    price:0,
    openCart:false,
    sort:'популярности',
    registrationData:{},
}

export var pizzaList = [];
let API = "https://628f710bdc47852365408a94.mockapi.io/pizzas";

let test = fetch(API)
.then(response => response.json())
.then(data => setData(data));


const setData=(data)=>{
pizzaList = data;
}

const reducer = (state = defaultState,action)=>{
      switch(action.type){
        case 'ADD_PIZZA':
          console.log(action.payload)
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

              case 'SAVE_REGDATA':
                return  {...state,registrationData:action.payload}

        default:return state
      }
}
const store = createStore(reducer);
 
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


reportWebVitals();
