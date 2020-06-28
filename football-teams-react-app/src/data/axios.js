import axios from "axios";

export default axios.create({
  baseURL: "http://homestead.test/api", // "https://cors-anywhere.herokuapp.com/https://tranquil-beyond-86261.herokuapp.com/api",
  headers: {
    Accept: "application/json",
  },
});