import axios from "axios";

const API_KEY = 'e2cb859ce3msh02a5594c481c64cp17ca09jsn69695e57d8bd';

export const albumsApi = axios.create({
    baseURL:'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout: 30000,
    headers:{'x-rapidapi-key': API_KEY}
});