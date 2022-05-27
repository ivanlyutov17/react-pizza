
export const Sort=({active,setActive})=>{


return(
    <div className="content__top">
            <div className="categories">
              <ul>
                <li onClick={()=>setActive('all')} className={active==='all'?'active':''}>Все</li>
                <li onClick={()=>setActive('meat')} className={active==='meat'?'active':''}>Мясные</li>
                <li onClick={()=>setActive('vegan')} className={active==='vegan'?'active':''}>Вегетарианская</li>
              </ul>
            </div>
          </div>
)
}