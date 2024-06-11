import { create } from "zustand";

const useStore = create((set) => ({
  usersData: JSON.parse(localStorage.getItem("user")) || [],

  addUser: (payload) =>
    set((state) => {
      const createUserData = [...state.usersData, payload];
      localStorage.setItem("user", JSON.stringify(createUserData));
      return { usersData: createUserData };
    }),

  removeUser: (id) =>
    set((state) => {
      const removeUserData = state.usersData.filter((el) => el.id !== id);
      localStorage.setItem("user", JSON.stringify(removeUserData));
      return { usersData: removeUserData };
    }),

  editUser: (id, payload) =>
    set((state) => {
      const editUSerData = state.usersData.map((el) =>
        el.id === id ? { ...el, ...payload } : el
      );
      localStorage.setItem("user", JSON.stringify(editUSerData));
      return { usersData: editUSerData };
    }),
}));

export default useStore;
