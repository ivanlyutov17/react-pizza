import { useState } from "react";
import { useSelector } from "react-redux"

export const DeliveryAccept = ()=>{

const order = useSelector(state=>state.pizzas);
const price = useSelector(state=>state.price);

const [orderType,setOrderType] = useState('');



    return(
        <div className="order-container">
       <h1>Подтвердите ваш заказ</h1>


<h2>Вы заказали:</h2>
<div className="cart-pizzas">
      <div style={{width:'100%'}}>
            {
                order.map((pizza)=>{
                    return(
                    <div style={{textAlign:'left',display:'flex',justifyContent:'space-between'}}>
                    <p style={{fontSize:'22px'}}>{pizza.name}  {pizza.size}</p>
                    <p style={{fontSize:'22px'}}>{pizza.price}</p>
                    </div>

                    )

                })
   
            }
            </div>

            
       </div>
       <div style={{textAlign:'left',marginTop:'30px'}}><h2>Итого: {price} рублей</h2></div>

       <div style={{marginTop:'25px',fontSize:'32px'}}>Выберите тип получения:</div>
       <div className="categories">
              <ul  style={{display:'flex',justifyContent:'center',marginTop:'25px ',marginBottom:'25px'}}>
                <li onClick={()=>setOrderType('takeAway')} className={orderType==='takeAway'?'active':''}>Одбор в ресторане</li>
                <li onClick={()=>setOrderType('delivery')} className={orderType==='delivery'?'active':''}>Доставка</li>
              </ul>
            </div>
            <div className="takeaway-window" style={{display:orderType==='takeAway'?'block':'none'}}>
                <h2>Наши адреса:</h2>

                <ul className="adresses" style={{listStyleType:'none'}}>
                    <li> <b>Ул.Пушкина 16А  </b><span>Часы работы : пн-пт 10:00 - 22:00</span></li>
                    <li><b>Ул.Пушкина 16А  </b><span>Часы работы : пн-пт 10:00 - 22:00</span></li>
                    <li><b>Ул.Пушкина 16А  </b><span>Часы работы : пн-пт 10:00 - 22:00</span></li>
                    <li><b>Ул.Пушкина 16А  </b><span>Часы работы : пн-пт 10:00 - 22:00</span></li>
                    <li><b>Ул.Пушкина 16А  </b><span>Часы работы : пн-пт 10:00 - 22:00</span></li>

                </ul>
            </div>

            <div className="delivery-window" style={{display:orderType==='delivery'?'block':'none'}}>
                <h3 style={{marginBottom:'25px'}}>Укажите подробности доставки:</h3>
                <form action="submit" style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <label className="delivery-label" htmlFor="adress">Укажите адрес</label>
                    <input type="adress" name="adress" id="adress" />
                    <label className="delivery-label" htmlFor="adress2">Укажите номер квартиры</label>
                    <input type="adress2" name="adress2" id="adress2" />
                    <label className="delivery-label" htmlFor="name">Укажите Имя</label>
                    <input type="name" name="name" id="name" />
                    <label className="delivery-label" htmlFor="phone">Укажите номер телефона</label>
                    <input type="phone" name="phone" id="phone" />
                    <label className="delivery-label" htmlFor="time">Укажите удобное время</label>
                    <input type="time" name="time" id="time" />


                    <div className="button button--outline button--add" style={{marginTop:'25px',width:'40%',margin:'0 auto'}}>
     
      <span >Перейти к выбору оплаты</span>
    </div>
                </form>
            </div>
    </div>)
}

