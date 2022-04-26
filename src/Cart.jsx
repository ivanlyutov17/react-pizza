import { useSelector } from "react-redux"
import { Cartfull } from "./Cartfull";
import { Cartempty } from "./Сartempty";


export const Cart = ()=>{
  const pizzas = useSelector(state=>state.pizzas)


  if(pizzas.length === 0){
    return <Cartempty/>
  }else
  return <Cartfull/>
}