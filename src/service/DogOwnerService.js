
import axios from 'axios';

const apiUrl = 'https://localhost:44334/api';

export async function getDogOwners() {
    let dogOwners = [];
    const response =  await axios.get(`${apiUrl}/DogOwners`);
    dogOwners = response.data;
    return dogOwners;
}

export async function getDogOwnerById(id) {
    let dogOwner = null;
    const response =  await axios.get(`${apiUrl}/DogOwners/${id}`);
    dogOwner = response.data;
    return dogOwner;
}
