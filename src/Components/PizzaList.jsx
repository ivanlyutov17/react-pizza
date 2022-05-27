import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {API} from '../lib'
export const PizzaList=({active})=>{
  const dispatch = useDispatch();
  const addPizza = (pizza)=>{
    if (pizzaSizeName !== pizza.name){
      alert('Вы не выбрали размер')
    }
    else{
      pizza.size = pizzaSize;
  dispatch({type:'ADD_PIZZA',payload:pizza});}
}

const [pizzas, setPizzas] = useState([])

const [sortedPizzas,setSortedPizzas] = useState([]);


const getPizza = async() => {
  setPizzas( await API.getAllPizzas())
}

useEffect(() =>{
    getPizza()
}, [])


useEffect(() => {

if(active !== 'all') setSortedPizzas(pizzas.filter(pizza => pizza.pizzaType === active))

}, [active])




const [pizzaSize,setPizzaSize] = useState('');
const [pizzaSizeName,setPizzaSizeName] = useState('');
const setSize = (size,pizzaName)=>{
    setPizzaSize(size);
    setPizzaSizeName(pizzaName);
}


    

 const checkPizzas=()=>{
 if(active === 'all') return pizzas;
  else return sortedPizzas;}
  let neededPizzas = checkPizzas();

  // },[currentSort,pizzas])
    return(
      <>
      {
      neededPizzas.map(
        (pizza)=> <PizzaComponent key={pizza.name+pizza.price} pizza={pizza} setSize={setSize} pizzaSizeName={pizzaSizeName} pizzaSize={pizzaSize} addPizza={addPizza} />

)}
      </>
    )}



const PizzaComponent = ({pizza, addPizza, setSize, pizzaSizeName, pizzaSize,}) => {


  return(
    <div className="pizza-block">
    <img className="pizza-block__image" src={pizza.img} alt="Pizza"/>
    <h4 className="pizza-block__title">{pizza.name}</h4>
    <div>
      <p>Выберите размер:</p>
      <div className="categories">
                <ul>
                  <li onClick={()=>setSize('S',pizza.name)} className={pizzaSize==='S'&&pizzaSizeName === pizza.name?'active':''}>S - 26 cm</li>
                  <li onClick={()=>setSize('L',pizza.name)} className={pizzaSize==='L'&&pizzaSizeName === pizza.name?'active':''}>L - 32 cm</li>
                  <li onClick={()=>setSize('XL',pizza.name)} className={pizzaSize==='XL'&&pizzaSizeName === pizza.name?'active':''}>XL - 40 cm</li>
                </ul>
              </div>
    </div>
    <div className="pizza-block__bottom">
      <div className="pizza-block__price">{pizza.price}₽</div>
      <div className="button button--outline button--add">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
        </svg>
        <span onClick={()=>addPizza(pizza)}>Добавить</span>
      </div>
    </div>
  </div>)
}