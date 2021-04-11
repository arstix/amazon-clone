import axios from "axios";

const instance = axios.create({
  baseURL: 'https://us-central1-clone-4ed58.cloudfunctions.net/api' //THE API (Cloud function) URL
})


export default instance;
