import axios from 'axios';

const apiUrl = 'https://localhost:44334/api';

export async function getCities() {
    let cities = [];
    const response =  await axios.get(`${apiUrl}/Cities`);
    cities = response.data;
    return cities;
}
