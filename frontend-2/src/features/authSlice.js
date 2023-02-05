import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { factoryAddress, factoryAbi } from "../constants";


const initialState = {
  // banner: null,
  address: "",
  factoryAddress: factoryAddress,
  factoryAbi: factoryAbi,
  ipfsHash: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
    logout: (state) => {
      state.auth = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { reset, logout, setAddress } = authSlice.actions;
