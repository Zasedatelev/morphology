import './app.css';
import Regist from "../regist-panel/regist-panel"
import { Route, Routes} from 'react-router-dom';
import UsersViews from '../users-views/UsersViews';

function App() {
  return (
    <div className="App">
      <div className="content">
      <Routes>
          <Route path="/"  element={<Regist/>}exact/>
          <Route path="/users" element={<UsersViews />} exact />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
