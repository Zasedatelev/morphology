import "./regist-panel.css";
import {Component} from "react";


class Regist extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    
    render(){
        const{name, email, password} = this.state;
        return (
            <div>
                <form className="form-control">
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Имя</label>
                        <input type="text" className="form-control" id="exampleInputName" defaultValue={name}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" defaultValue={email}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" defaultValue={password}/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Проверить меня</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.postDataUser}>Отправить</button>
                </form>
            </div>
    )  
    } 
      
}

export default Regist;