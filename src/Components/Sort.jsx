import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

export const Sort=({active,setActive})=>{

  const dispatch = useDispatch();
  const activeSort = useSelector(state=>state.sort);

  const changeCurrentSort = (value)=>{
    dispatch({type:'CHANGE_SORT',payload:value});
    changeSort();
  }

  const [sort,setSort] = useState(false);

  const changeSort = ()=>{
    setSort(!sort);
  }
return(
    <div className="content__top">
            <div className="categories">
              <ul>
                <li onClick={()=>setActive('all')} className={active==='all'?'active':''}>Все</li>
                <li onClick={()=>setActive('meat')} className={active==='meat'?'active':''}>Мясные</li>
                <li onClick={()=>setActive('vegan')} className={active==='vegan'?'active':''}>Вегетарианская</li>
              </ul>
            </div>
            <div className="sort">
              <div className="sort__label">
                <svg onClick={()=>changeSort()}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={()=>changeSort()}>{activeSort
                }</span>
              </div>
              <div className="sort__popup" style={{display:sort?'block':'none'}}>
                <ul>
                  <li onClick={()=>changeCurrentSort('популярности')} className={activeSort === 'популярности'?'active':''}>популярности</li>
                  <li onClick={()=>changeCurrentSort('цене')} className={activeSort === 'цене'?'active':''}>цене</li>
                  <li onClick={()=>changeCurrentSort('алфавиту')} className={activeSort === 'алфавиту'?'active':''}>алфавиту</li>
                </ul>
              </div>
            </div>
          </div>
)
}