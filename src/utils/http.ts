import axios from "axios";

const http = axios.create({
  // o método create retorna uma nova instância do axio com algumas pré configurações
  baseURL: "http://localhost:4010",
  headers: {
    authorization: "Bearer 123",
  },
});

export default http;
