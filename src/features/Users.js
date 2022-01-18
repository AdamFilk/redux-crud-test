import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";
export const usersSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    removeUser: (state, action) => {
      state.value = state.value.filter((val) => val.id !== action.payload.id);
    },
    updateUserName: (state, action) => {
      state.value.map((val) => {
        if (val.id === action.payload.id) {
          console.log(action.payload.username);
          val.username = action.payload.username;
        }
      });
    },
  },
});
export const { addUser, removeUser, updateUserName } = usersSlice.actions;
export default usersSlice.reducer;
