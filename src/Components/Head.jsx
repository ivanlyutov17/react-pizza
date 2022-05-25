import { Cartbutton } from "./Сartbutton"
import { Link } from "react-router-dom"
export const Head = ()=>{

    return(
      <div className="container top_head">
          <div class="header__logo">
            <img width="38" src="/img/pizza-svg" alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <div className="head-buttons">
          <Cartbutton/>
         <Link to='/registration'><div className="button button--outline button--add">
     
     <span>Регистрация</span>
   </div></Link> 
   </div>
          </div>
                  
  )
}