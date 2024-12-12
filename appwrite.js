import { Client, Account } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('67598c4400041cf4184a'); // Replace with your project ID

export const account = new Account(client);
export default client;
