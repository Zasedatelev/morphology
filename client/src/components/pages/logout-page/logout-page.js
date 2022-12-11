import React, {useEffect} from 'react';
import axios from "axios";
import keyStore from "../keyStore";
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

   const Nav =  () => {React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/users/', {
        })
        .then(() => {
            delete keyStore.key;
            navigate('/login');
        });
    }, []);
    };

    useEffect(() => {
        let timeOut =  setTimeout(() => {
                Nav();
            }, 5000);
        return  clearTimeout(timeOut);   
    });
    
    
    

    return (    
        <div>
            Вы успешно вышели из системы!
            Через 5 секунд будете перенаправлены на гостевую страницу
        </div>
    );
};


export default Logout;