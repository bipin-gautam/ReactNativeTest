import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosService from '../../utlis/axiosService';

const initialState = {
  merchantDetail: {},
  loading: false,
  error: null,
};

export const fetchMerchantDetailAction = createAsyncThunk(
  'merchantDetail/fetchMerchantDetail',
  async (item, {rejectWithValue}) => {
    const {merchant_id} = item;
    try {
      const response = await axiosService.get(
        `integration/merchant/${merchant_id}?lat=0&long=0&query=Melbourne&page=1&user_timezone=Asia/Kolkata`,
      );
      console.log(response.data?.data, ' RES->');
      return response.data?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const merchantDetailSlice = createSlice({
  name: 'merchantDetail',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMerchantDetailAction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMerchantDetailAction.fulfilled, (state, action) => {
        state.loading = false;
        state.merchantDetail = action.payload;
        state.error = null;
      })
      .addCase(fetchMerchantDetailAction.rejected, (state, action) => {
        state.loading = false;
        state.merchantDetail = {};
        state.error = action.payload;
      });
  },
});

export default merchantDetailSlice.reducer;
