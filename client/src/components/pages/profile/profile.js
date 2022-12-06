import * as React from 'react';
import axios from "axios";


function Profile() {

  const [userDate, setUserDate] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/data/', {
    })
    .then(({ data }) => {
      setUserDate(data);
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