import './app.css';
import * as React from 'react';
import Login from "../pages/login-panel/login-panel"
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
          <Route path="/"  element={<Regist/>}exact/>
          <Route path="/login"  element={<Login/>}exact/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
