import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Registration = ()=>{
    
    const dispatch = useDispatch();
    let formData = [
        ['adress','',],
        ['room','',],
        ['name','',],
       ['email','',],
        ['phone','',],
        ['password','',],
    ];
    let registrationData;
    let allow = false;
    let navigate = useNavigate();
    let data = useSelector(state=>state.registrationData);


const handleRegData = ()=>{
    let regData = document.forms.regData;
    for(let i =0;i<regData.length;i++){
        if(regData[i]!==''){
        formData[i][1] = regData[i].value;}
    }
    for(let i = 0;i<formData.length;i++){
        if(formData[i][1] === ''){
            allow = false;
            alert('Не все поля');
            break;
        }
    
        allow = true;
    }

   registrationData = Object.fromEntries(formData)
        changeStoreData(registrationData);


}

const changeStoreData=(registrationData)=>{

if(allow === true){

        fetch('https://628f710bdc47852365408a94.mockapi.io/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(registrationData),
        })
        .then(function(response) {
            if(response.status === 201){
           dispatch({type:'SAVE_REGDATA',payload:registrationData});
           alert('Вы успешно зарегистрировались!');
           navigate('/');
        }
           else  {console.log('Error:', response.status);
           alert('Произошла ошибка,попробуйте позже.');
    }
        })
    }

   


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