import * as React from 'react';

import './personal_account-style.css';
import axios from "axios";
import keyStore from '../keyStore';



function Profile() {
  const [userData, setUserDate] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/data/', {
      headers: { 'Authorization': `Token ${keyStore.key}` }
    })
    .then(({ data }) => {
      setUserDate(data);
    })
    .catch((err) => {
      if(err.response.status === 403||err.response.status === 401) {
          window.location.href = '/';
      }
  })
  }, []);

  const fat_free = () => {
    userData.slice(3).map((obj) => {
      let sum = 0;
      let result = 0;
      let L = obj.body_length;
      let P = obj.body_weight;
      let a = obj.acromial_diameter;
      let b = obj.mid_chest_transverse_diameter;
      let c = obj.hip_width;
      let d = obj.interbody_diameter;
      let e = obj.width_two_closed_knees;
      let g = obj.shin_circumference_minimal;
      let h = obj.forearm_circumference_minimal;
      sum  = a + b + c + d + e + g + h;
      result = (sum / 18.1) / P * 100;
 
  return <div>результат: {result} % от массы тела</div>;
  }
)}


  return (
    <div>
      <h1 className='lk'>Личный кабинет</h1>
      <h5 className='op'>Здесь вы сможете просматривать и редактировать данные по вашей телометрии</h5>
      <div>
      {userData && 
        userData.map((obj,index) => (
          <ul>
            <li key={index}>Имя: {obj.name}</li>
            <li >Дата рождения: {obj.bithday}</li>
            <li >Длина тела(см): {obj.body_length}</li>
            <li >Масса тела(кг): {obj.body_weight}</li>
            <li >Акромиальный диаметр(мм): {obj.acromial_diameter}</li>
            <li >Среднегрудинный поперечный диаметр(мм): {obj.mid_chest_transverse_diameter}</li>
            <li >Тазо-бедреный диаметр(ширина таза 1)(мм): {obj.hip_width}</li>
            <li >Межвертельный диаметр(ширина таза 3)(мм): {obj.interbody_diameter}</li>
            <li >Ширина двух сомкнутых колен(мм): {obj.width_two_closed_knees}</li>
            <li >Обхват голени минимальный(мм): {obj.shin_circumference_minimal}</li>
            <li >Обхват предплечья минимальный(мм): {obj.forearm_circumference_minimal}</li>
          </ul>
              
        ))
      };
      </div>
      Обезжиренная масса тела
      <button type="button" className='btn_fat_free' onClick={fat_free}>Расчитать</button>
    </div>
  );
};


export default Profile;