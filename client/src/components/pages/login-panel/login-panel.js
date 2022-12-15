import "./regist-panel.css";
import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import keyStore from "../keyStore";


function Login () {


    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();


    const postRegister = () => {
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/v1/dj-rest-auth/login/',
          data: {
            username: name,
            password: password
          },
        }).then((resp) => {
            keyStore.key = resp.data.key;
            navigate("/profile");
            
        });
        // 
    };
    
        return (
        <div className="wrapper">
            <div className="logo">
                <img src="https://avatars.mds.yandex.net/i?id=6a38dd6983c186fcfa5262971dbabe91-7083339-images-thumbs&n=13" alt=""/>
                    </div>
            <div className="text-center mt-4 name">
                Спортивная Морфология
                    </div>
            <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" className="username" id="username" placeholder="Имя" onChange={e => setName(e.target.value) }/>
                    </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" className="password" id="pwd" placeholder="Пароль" autoComplete="on" onChange={e => setPassword(e.target.value)}/>
                </div>
                <button type="button" className="btn mt-3" onClick={postRegister}>Войти</button>
                </form>
            </div>
    )   
}

export default Login;
/* <form className="form-control">
    //         <div className="mb-3">
    //             <label htmlFor="exampleInputName" className="form-label">Имя</label>
    //             <input type="text" className="form-control" id="exampleInputName"  onChange={e => setName(e.target.value) }/>
    //         </div>
    //         <div className="mb-3">
    //             <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
    //             <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="on" onChange={e => setPassword(e.target.value)}/>
    //         </div>
    //         <div className="mb-3 form-check">
    //             <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    //             <label className="form-check-label" htmlFor="exampleCheck1">Проверить меня</label>
    //         </div>
    //         <button type="button" className="btn btn-primary" onClick={postRegister}>Отправить</button>
    //     </form>  */




