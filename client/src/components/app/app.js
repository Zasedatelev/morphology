import './app.css';
import Login from "../pages/login-panel/login-panel"
import Guest from '../pages/guest_page/guest-page';
import Regist from '../pages/regist/registration';
import Profile  from '../pages/profile/profile';
import Navbar from '../pages/navbar/navbar'; 
import Logout from '../pages/logout-page/logout-page';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
      <Routes>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/guest_panel"  element={<Guest/>}exact/>
          <Route path="/regist"  element={<Regist/>}exact/>
          <Route path="/login"  element={<Login/>}exact/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
