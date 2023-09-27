import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosService from '../../utlis/axiosService';

const initialState = {
  merchants: [],
  loading: false,
  error: null,
};

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

export default merchantSlice.reducer;
