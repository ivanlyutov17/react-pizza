import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export const Cartfull = ()=>{
    let isVisible = '';
    const pizzas = useSelector(state=>state.pizzas);
    const price = useSelector(state=>state.price);
    const show = useSelector(state=>state.openCart);
    const dispatch = useDispatch();
    let pizzaNames = [];
    let pizzaQuantity = [];
  

    let arr = [];
  var test = useSelector(state=>state.pizzas);
    test.forEach(el => {
      arr.push(el.name);
    });

  var resultReduce = arr.reduce(function(acc, cur) {
    if (!acc.hash[cur]) {
      acc.hash[cur] = { [cur]: 1 };
      acc.map.set(acc.hash[cur], 1);
      acc.result.push(acc.hash[cur]);
    } else {
      acc.hash[cur][cur] += 1;
      acc.map.set(acc.hash[cur], acc.hash[cur][cur]);
    }
    return acc;
  }, {
    hash: {},
    map: new Map(),
    result: []
  });
  
  var result = resultReduce.result.sort(function(a, b) {
    return resultReduce.map.get(b) - resultReduce.map.get(a);
  });
  
for (let i = 0;i<result.length;i++){
  pizzaNames.push(Object.keys(result[i])[0])
  pizzaQuantity.push(Object.values(result[i])[0]);

}



    
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
      <div>
            {
                pizzaNames.map((pizza)=>{
                    return(
                    <p style={{fontSize:'32px'}}>{pizza}</p>)
                })
   
            }
            </div>
            <div style={{textAlign:'right'}}>
            {
              pizzaQuantity.map((quantity)=>{
                return(
                <p style={{fontSize:'32px'}}>x{quantity}</p>)
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
  </div>)
}