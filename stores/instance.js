//**** Dependencies ****//
import axios from "axios";

//**** Code ****//

const instance = axios.create({
  baseURL: "http://192.168.0.112:8000",
});

export default instance;
