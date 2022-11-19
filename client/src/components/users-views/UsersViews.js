import ApiService from "../../services/UserServices";
import React from "react";
import axios from "axios";
import './users-style.css'

function UsersViews () {
    const [users, setUsers] = React.useState([])

   const userServices = new ApiService();
   
   React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/users/').then(({ data }) => {
      setUsers(data);
      
    });
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