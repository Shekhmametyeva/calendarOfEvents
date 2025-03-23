import axios from 'axios';

export const getUser = async (userId) => {
    // пока ид хардкодом
    const response = await axios.get(`http://localhost:8085/api/v1/users/${userId}`);
    return response.data;
}