import * as React from 'react';
import axios from "axios";
import keyStore from '../keyStore';

function Profile() {

  const [userDate, setUserDate] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/data/', {
      headers: { 'Authorization': `Token ${keyStore.key}` }
    })
    .then(({ data }) => {
      setUserDate(data);
    })
    .catch((err) => {
      if(err.response.status === 403||err.response.status === 401) {
          window.location.href = '/guest_panel';
      }
  })
  }, []);

  return (
    <div>
      <h1>Личный кабинет</h1>
      <h2>Сдесь вы сможете просматривать и редоктировать данные по вашей телометрии</h2>
      <form>
        <p><label>Имя<input type="text" name="username"/></label></p>
        <p><label>дата<input type="password" name="password"/></label></p>
    </form>
    </div>
  );
};


export default Profile;