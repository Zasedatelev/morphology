import './app.css';
import Login from "../pages/login-panel/login-panel"
import Guest from '../pages/guest_page/guest-page';
import Regist from '../pages/regist/registration';
import Profile  from '../pages/profile/profile';
import { Route, Routes} from 'react-router-dom';
import UsersViews from '../pages/users-views/UsersViews';

function App() {
  return (
    <div className="App">
      <div className="content">
      <Routes>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/guest_panel"  element={<Guest/>}exact/>
          <Route path="/regist"  element={<Regist/>}exact/>
          <Route path="/login"  element={<Login/>}exact/>
          
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
