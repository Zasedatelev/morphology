import axios from 'axios'
class ApiService {
    _ApiUrl = "http://127.0.0.1:8000/api/v1/users/"
   
    // функция оправки запроса
    getResponce = async (url) => {
        let responce = await fetch(url);

        if (!responce.ok) {
            throw new Error(`Could not fetch ${url}, status ${responce.status}`)
        }

        return await responce.json();
    }

    // функция получения всех пользователей(GET и POST методы)
    getUsers = (data) => {
        return axios.get(this._ApiUrl, data);
    }

   
}


export default ApiService;