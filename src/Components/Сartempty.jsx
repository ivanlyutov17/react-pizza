import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
export const Cartempty = ()=>{
  const dispatch = useDispatch();

  const openCart=()=>{
    dispatch({type:'CHANGE_CART'})
  }



  const show = useSelector(state=>state.openCart);


  let isVisible = '';
    
    
        if(show === false){
          isVisible = 'none'
        }else
        isVisible = 'block'



    return(
        <div class="cart  cart--empty" style={{display:isVisible}}>
        <h2>Корзина пустая <icon>😕</icon></h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.<br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src="/img/empty-cart.png" alt="Empty cart" />
        <button class="button button--black">
          <span onClick={()=>openCart()}>Вернуться назад</span>
        </button>
      </div>
    )
}