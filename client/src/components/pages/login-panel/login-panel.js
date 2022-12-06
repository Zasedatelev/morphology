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

    };
    
        return (
            <div>
                <form className="form-control">
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Имя</label>
                        <input type="text" className="form-control" id="exampleInputName"  onChange={e => setName(e.target.value) }/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="on" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Проверить меня</label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={postRegister}>Отправить</button>
                </form>
            </div>
    )   
}

export default Login;