import axios from "axios";

const fashiqApi = axios.create({
  baseURL: "http://localhost:3000/api/fashiq",
});

export default fashiqApi;
