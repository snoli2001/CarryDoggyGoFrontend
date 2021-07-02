import axios from 'axios';

const apiUrl = 'https://localhost:44334/api';

export async function getDistricts(cityId) {
    let districts = [];
    const response =  await axios.get(`${apiUrl}/City/${cityId}/districts`);
    districts = response.data;
    return districts;
}