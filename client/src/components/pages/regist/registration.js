import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Registration() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password1, setPassword1] = React.useState('');
    const [password2, setPassword2] = React.useState('');
    const navigate = useNavigate();

    const postRegister = () => {
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/dj-rest-auth/registration/',
          data: {
            username: name,
            email: email,
            password1: password1,
            password2: password2,
          },
        });
      navigate('/login');
    };

  return (
    <div>
       <div>
                <form className="form-control">
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Имя</label>
                        <input type="text" className="form-control" id="exampleInputName" onChange={e => setName(e.target.value) } />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value) }/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Пароль 1</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="on" onChange={e => setPassword1(e.target.value) }/>
                        <div className="form-text">Введите пароль</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Пароль 2</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" autoComplete="on" onChange={e => setPassword2(e.target.value) }/>
                        <div className="form-text">Пароли должны совпадать</div>
                    </div>
                    
                    <button type="button" className="btn btn-primary" onClick={postRegister}>Отправить</button>
                </form>
            </div>
    </div>
  );
};


export default Registration;