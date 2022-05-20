import  {pizzaList}  from "./pizzasList"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
export const PizzaList=({active})=>{
  const currentSort = useSelector(state=>state.sort)
  const dispatch = useDispatch();
  const addPizza = (pizza)=>{
    if (pizzaSizeName !== pizza.name){
      alert('Вы не выбрали размер')
    }
    else{
      pizza.size = pizzaSize;
  dispatch({type:'ADD_PIZZA',payload:pizza});}
}

const [pizzaSize,setPizzaSize] = useState('');
const [pizzaSizeName,setPizzaSizeName] = useState('');
const setSize = (size,pizzaName)=>{
    setPizzaSize(size);
    setPizzaSizeName(pizzaName);
}
  let pizzasToShow = pizzaList;

 if (active!=='all'){
 pizzasToShow = pizzaList.filter((pizza)=>pizza.pizzaType===active)
 };

 if (currentSort === 'цене'){
  pizzasToShow.sort((a,b)=>{
    return a.price-b.price
   })
  };
  if (currentSort === 'алфавиту'){
    pizzasToShow.sort(function(a, b){
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB) 
        return -1
      if (nameA > nameB)
        return 1
      return 0
      })
    };
      
    return(
      <>
      {
      pizzasToShow.map(
        (pizza)=>{
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
})}
      </>
    )}