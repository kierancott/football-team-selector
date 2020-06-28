import axios from "axios";

export default axios.create({
  // Laravel API is hosted on Heroku:
  baseURL: "https://cors-anywhere.herokuapp.com/https://tranquil-beyond-86261.herokuapp.com/api",
  headers: {
    Accept: "application/json",
  },
});