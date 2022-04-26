import { Cartbutton } from "./Сartbutton"
export const Head = ()=>{

    return(
      <div className="container top_head">
          <div class="header__logo">
            <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <Cartbutton/>

          </div>
                  
  )
}