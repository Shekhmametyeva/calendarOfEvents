import axios from 'axios';

export const getUser = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/users", {params: {id: 1}});
    console.log(response.data);
    return response.data;
}