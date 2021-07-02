
import axios from 'axios';

const apiUrl = 'https://localhost:44334/api';


export async function createDogWalk(dogwalkData) {
    console.log(dogwalkData);
    const response = await axios.post(`${apiUrl}/DogWalks`,dogwalkData);
    return response.data
}

export async function getDogWalkByDogWalkerId(id) {
    const response = await axios.get(`${apiUrl}/DogWalkers/${id}/DogWalks`);
    return response.data
}

export async function startDogWalk(id) {
    const response = await axios.patch(`${apiUrl}/DogWalks/${id}/InProgress`);
    return response.data
}

export async function finishDogWalk(id) {
    const response = await axios.patch(`${apiUrl}/DogWalks/${id}/Finished`);
    return response.data
}

export async function cancelDogWalk(id) {
    const response = await axios.patch(`${apiUrl}/DogWalks/${id}/canceled`);
    return response.data
}


