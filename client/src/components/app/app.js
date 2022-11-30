import './app.css';
import Login from "../pages/login-panel/login-panel"
import Regist from '../pages/regist-panel/regist-panel';
import { Route, Routes} from 'react-router-dom';
import UsersViews from '../pages/users-views/UsersViews';

function App() {
  return (
    <div className="App">
      <div className="content">
      <Routes>
          <Route path="/" element={<UsersViews />} exact />
          <Route path="/regist"  element={<Regist/>}exact/>
          <Route path="/login"  element={<Login/>}exact/>
          
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
