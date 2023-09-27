// merchantSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosService from '../../utlis/axiosService';

// Define the initial state
const initialState = {
  merchants: [],
  loading: false,
  error: null,
};

// Define an async thunk to fetch merchants
export const fetchMerchants = createAsyncThunk(
  'merchants/fetchMerchants',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axiosService.get(
        'integration/merchant/?lat=0&long=0&page=1&trending=true&user_timezone=Asia/Calcutta',
      );
      return response.data?.data?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Create a slice that generates actions and reducer
const merchantSlice = createSlice({
  name: 'merchants',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMerchants.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMerchants.fulfilled, (state, action) => {
        state.loading = false;
        state.merchants = action.payload;
        state.error = null;
      })
      .addCase(fetchMerchants.rejected, (state, action) => {
        state.loading = false;
        state.merchants = [];
        state.error = action.payload;
      });
  },
});

// Export the reducer
export default merchantSlice.reducer;
