import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Registration = ()=>{

    const dispatch = useDispatch();
    let formData = [];
    let navigate = useNavigate();
    let data = useSelector(state=>state.registrationData);
    console.log(data);

const handleRegData = ()=>{
    let regData = document.forms.regData;

    for(let i = 0;i<regData.length;i++){
        if(regData[i].value!=='')
        formData[i]=regData[i].value;
        else{
        alert('Вы заполнили не все поля')
    break;}
    }
    if(formData.length===regData.length)
    changeStoreData();


}

const changeStoreData=()=>{
    dispatch({type:'SAVE_REGDATA',payload:formData});
    alert('Вы успешно зарегистрировались!');
    navigate('/');

}

    
    return(
        <div>
            <div className="order-container">
                <h2>Регистрация</h2>

                <form action="submit" name='regData' style={{display:'flex',flexDirection:'column',gap:'10px',width:'50%',margin:'0 auto'}}>
                <label className="delivery-label" htmlFor="adress">Укажите адрес</label>
                    <input type="adress" name="adress" id="adress" />
                    <label className="delivery-label" htmlFor="adress2">Укажите номер квартиры</label>
                    <input type="adress2" name="adress2" id="adress2"  />
                    <label className="delivery-label" htmlFor="name">Укажите Имя</label>
                    <input type="name" name="name" id="name"  />
                    <label className="delivery-label" htmlFor="email">Укажите электронную почту</label>
                    <input type="email" name="email" id="email"  />
                    <label className="delivery-label" htmlFor="phone">Укажите номер телефона</label>
                    <input type="phone" name="phone" id="phone"  />
                    <label className="delivery-label" htmlFor="password">Введите пароль</label>
                    <input type="password" name="password" id="password"  />
    <div style={{display:'flex'}}>
                    <div onClick={()=>handleRegData()} className="button button--outline button--add" style={{marginTop:'25px',width:'40%',margin:'0 auto'}}>
     
      <span>Зарегистрироваться</span>
    </div>
   
    </div>
                </form>
            </div>
        </div>
    )
}