import { makeObservable, observable } from "mobx";

export class UserStore {
  usersList = [];
  constructor() {
    makeObservable(this, {
      usersList: observable,
    });
  }
}

export default new UserStore();
