

import axios from 'axios';

// const apiUrl = 'https://localhost:44334/api';
const apiUrl = 'https://carrydoggygoaw.azurewebsites.net/api';


export async function getDogsByDogOwnerId(id) {
    let dogs = [];
    const response =  await axios.get(`${apiUrl}/DogOwners/${id}/dogs`);
    dogs = response.data;
    return dogs;
}

export async function createDog(id, dog) {
    let createdDog = null;
    const response = await axios.post(`${apiUrl}/DogOwners/${id}/dogs`, dog);
    createdDog = response.data;
    return createdDog;
}
