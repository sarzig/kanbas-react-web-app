import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modules: [] as any,
  module: { name: "New Module", description: "New description" },
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },

    addModule: (state, action) => {
      state.modules = [action.payload, ...state.modules];
    },

    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module: { _id: any; }) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module: { _id: any; }) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});

export const { addModule, deleteModule,
  updateModule, setModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;
