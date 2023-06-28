import axios from "axios";

//base da url:  https://valorant-api.com/v1/agents

//url para acessar os agentes:  agents?isPlayableCharacter=true&language=pt-BR
const api = axios.create({
    baseURL: 'https://valorant-api.com/v1/'
});

export default api;