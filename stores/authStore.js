import { observable, makeAutoObservable, action } from "mobx";
import decode from "jwt-decode";
import instance from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = [];

  constructor() {
    makeAutoObservable(this, {
      user: observable,
      fetchUser: action,
    });
  }

  fetchUser = async () => {
    console.log("fetchUser here");
    try {
      const response = await instance.get("/");
      this.user = response.data;
      this.loading = false;
      console.log(this.user);
    } catch (error) {
      console.error("AuthStore --> fetchUser --> Error", error);
    }
  };

  setUser = async (token) => {
    console.log("I'm here in setUser");
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    // fetchUser();
    this.user = decode(token);
    console.log(this.user);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      console.log(decode(res.data.token));
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
      console.log(decode(res.data.token));
      // console.log("authStore -> signin -> res.data", res.data);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };
  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < decodedToken.exp) {
        this.setUser(token);
        // } else {
        //   this.signout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
// authStore.fetchUser();
export default authStore;
