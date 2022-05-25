import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";

export const Cartfull = ()=>{
    let isVisible = '';
    const pizzas = useSelector(state=>state.pizzas);
    const price = useSelector(state=>state.price);
    const show = useSelector(state=>state.openCart);
    const dispatch = useDispatch();

 
    if(show === false){
        isVisible = 'none'
      }else
      isVisible = 'block'


    const openCart=()=>{
        dispatch({type:'CHANGE_CART'})
      }
      const clearCart=()=>{
        dispatch({type:'DELETE_ALL_PIZZA'})
      }



    
    pizzas.sort();


    return(<div className='cart' style={{display:isVisible}}>
    <h2>Ваш заказ : </h2>
    <div className="cart-pizzas">
      <div style={{width:'100%'}}>
            {
                pizzas.map((pizza)=>{
                    return(
                    <div style={{textAlign:'left',display:'flex',justifyContent:'space-between'}}>
                    <p style={{fontSize:'32px'}}>{pizza.name}  {pizza.size}</p>
                    <p style={{fontSize:'32px'}}>{pizza.price}</p>
                    </div>

                    )

                })
   
            }
            </div>

</div>
            <h3>Cтоимость заказа :{price}</h3>
    <button onClick={()=>openCart()} class="button button--black">
      <span >Вернуться назад</span>
    </button>
    <button class="button button--black ml">
      <span onClick={()=>clearCart()}>Очистить корзину</span>
    </button>
    <button class="button button--black ml">
    <Link to="/order">      <span>Cоздать заказ</span>
</Link>
    </button>
    
  </div>)
}