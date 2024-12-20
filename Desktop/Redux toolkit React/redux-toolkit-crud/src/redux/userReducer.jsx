import { createSlice } from "@reduxjs/toolkit";
import { sampleData } from "../components/mockData";

export const userReducer = createSlice({
  name: "user",
  initialState: {
    users: sampleData,
  },
  reducers: {
    addUser(state, action) {
      const newUser = action.payload;
      state.users.push(newUser);
    },
    updateUser(state, action) {
      const { id, name, email } = action.payload; // Use consistent naming
      const userToUpdate = state.users.find((user) => user.id === id);
      if (userToUpdate) {
        userToUpdate.name = name; // Update name
        userToUpdate.email = email; // Update email
      }
    },
    deleteUser(state, action) {
      const id = action.payload; // Directly access id from the payload
      state.users = state.users.filter((u) => u.id !== id); // Update the users array in the state
    },
  },
});

export const { addUser, updateUser, deleteUser } = userReducer.actions;
export default userReducer.reducer;
