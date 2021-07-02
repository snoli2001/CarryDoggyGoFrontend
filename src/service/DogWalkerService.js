
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
export async function postDogWalker(dogwalker) {
    let dogWalkerdata = null;
    const response =  await axios.post(`${apiUrl}/DogWalkers/`, dogwalker);
    dogWalkerdata = response.data;
    return dogWalkerdata;
}