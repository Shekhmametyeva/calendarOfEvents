import axios from 'axios';

export const getUser = async () => {
    const response = await axios.get("http://localhost:8085/api/v1/users/23e3cef7-bc7d-4776-a6a5-dce8024f17e4");
    console.log(response.data);
    return response.data;
}