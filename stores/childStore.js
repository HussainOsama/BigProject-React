//I know the plural of child is children, but meh -.-'

//**** Dependencies ****//
import { action, makeAutoObservable, observable } from "mobx";

//**** Imports ****//
import instance from "./instance";

import authStore from "./authStore";

//**** Code ****//

class ChildStore {
  childs = [];
  loading = true;

  constructor() {
    makeAutoObservable(this, {
      childs: observable,
      loading: observable,
      fetchChilds: action,
    });
  }

  fetchChilds = async () => {
    try {
      console.log("UserId below");
      console.log(authStore.user.id);
      const response = await instance.get(`/child/${authStore.user.id}`);
      this.childs = response.data;
      this.loading = false;
      console.log(this.childs);
    } catch (error) {
      console.error("ChildStore --> fetchChild --> Error", error);
    }
  };
}

const childStore = new ChildStore();
childStore.fetchChilds();

export default childStore;
