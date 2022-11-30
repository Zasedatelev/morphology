import React from "react";
import axios from "axios";
import './users-style.css'
import { useNavigate } from 'react-router-dom';

function UsersViews (props) {
    const [users, setUsers] = React.useState([])
    const navigate = useNavigate();

   
   React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/users/')
    .then(({ data }) => {
      setUsers(data);
    })
    .catch((err) => {
        if(err.response.status === 403) {
            window.location.href = '/regist';
        }
    })
  }, []);


    return (
        <div>
            <div className="userslist">
                {users.map((obj) =>(      
                    <div key={obj.id} className="user">
                    <h2>{obj.name}</h2>
                    { obj.data.map((obj) => (
                        <h3>День рождения: {obj.bithday}</h3>
                    ))}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default UsersViews;