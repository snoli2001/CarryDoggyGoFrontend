
import axios from 'axios';

const apiUrl = 'https://localhost:44334/api';

export async function getDogWalkers() {
    let dogWalkers = [];
    const response =  await axios.get(`${apiUrl}/DogWalkers`);
    dogWalkers = response.data;
    return dogWalkers;
}

export async function getDogWalkersById(id) {
    let dogWalkers = null;
    const response =  await axios.get(`${apiUrl}/DogWalkers/${id}`);
    dogWalkers = response.data;
    return dogWalkers;
}
