//**** Dependencies ****//
import axios from "axios";

//**** Code ****//

const instance = axios.create({
  baseURL: "http://192.168.100.232:8000",
});

export default instance;
