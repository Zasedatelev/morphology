import "./regist-panel.css";
import React from "react";
import axios from "axios";

function Regist () {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');


   const postRegister = () => {  
        axios.post('http://127.0.0.1:8000/api/v1/auth/login', {}, {
            auth: {
              username: name,
              password: password
            }
          });
    };
    
        return (
            <div>
                <form className="form-control">
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Имя</label>
                        <input type="text" className="form-control" id="exampleInputName"  onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Проверить меня</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={postRegister}>Отправить</button>
                </form>
            </div>
    )   
}

export default Regist;