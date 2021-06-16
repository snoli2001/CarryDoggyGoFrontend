

import axios from 'axios';

const apiUrl = 'https://localhost:44334/api';


export async function getDogsByDogOwnerId(id) {
    let dogs = [];
    const response =  await axios.get(`${apiUrl}/DogOwners/${id}/dogs`);
    dogs = response.data;
    return dogs;
}
