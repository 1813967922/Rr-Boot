import { defineStore } from "pinia";
import { User } from "../interface";

export const userStore = defineStore("user", {
  state: (): User => {
    return {
      nickName: "",
      avatar: "",
      token: "",
      id: "",
    };
  },
  actions: {
    setUser(key: keyof User, value: any) {
      this.$state[key] = value;
    },
  },

  persist: {
    enabled: true,
  },
});
