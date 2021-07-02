import axios from 'axios';

// const apiUrl = 'https://localhost:44334/api';
const apiUrl = 'https://carrydoggygoaw.azurewebsites.net/api';

export async function GetDogOwnerNotification(DogOwnerId) {
    let notifications = [];
    const response =  await axios.get(`${apiUrl}/DogOwners/${DogOwnerId}/DogOwnerNotifications`);
    notifications = response.data;
    return notifications;
}