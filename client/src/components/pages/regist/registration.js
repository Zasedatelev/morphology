import React from "react";
import axios from "axios";
import './registration.css';
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
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-9 col-lg-7 col-xl-6">
        <div className="card">
          <div className="card-body p-5">
            <h2 className="text-uppercase text-center mb-5">Создать аккаунт</h2>

            <form>

              <div className="form-outline mb-4">
                <input type="text" id="form3Example1cg" className="form-control form-control-lg" onChange={e => setName(e.target.value) }/>
                <label className="form-label" htmlFor="form3Example1cg">Логин</label>
              </div>

              <div className="form-outline mb-4">
                <input type="email" id="form3Example3cg" className="form-control form-control-lg" onChange={e => setEmail(e.target.value) }/>
                <label className="form-label" htmlFor="form3Example3cg">Адрес электронной почты</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form3Example4cg" className="form-control form-control-lg" onChange={e => setPassword1(e.target.value) }/>
                <label className="form-label" htmlFor="form3Example4cg">Пароль</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form3Example4cdg" className="form-control form-control-lg" onChange={e => setPassword2(e.target.value) }/>
                <label className="form-label" htmlFor="form3Example4cdg">Повторите свой пароль</label>
              </div>

              <div className="form-check d-flex justify-content-center mb-5">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                <label className="form-check-label" htmlFor="form2Example3g">
                Я согласен со всеми положениями <a href="#!" className="text-body"><u>Условий предоставления услуг</u></a>
                </label>
              </div>

              <div className="d-flex justify-content-center">
                <button type="button"
                  className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={postRegister}>Зарегистрироваться</button>
              </div>

              <p className="text-center text-muted mt-5 mb-0">У вас уже есть аккаунт? <a href="/login"
                  className="fw-bold text-body"><u>Войти</u></a></p>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
 
  );
};


export default Registration;




