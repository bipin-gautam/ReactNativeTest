import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosService from '../../utlis/axiosService';

const initialState = {
  favouriteList: [],
  loading: false,
  error: null,
};

export const fetchFavourites = createAsyncThunk(
  'favouriteList/fetchFavourites',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axiosService.get(
        '/integration/merchant/favourite/?page=1&user_timezone=undefined"',
      );
      return response.data?.data?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const favouriteListSlice = createSlice({
  name: 'favouriteList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFavourites.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavourites.fulfilled, (state, action) => {
        state.loading = false;
        state.favouriteList = action.payload;
        state.error = null;
      })
      .addCase(fetchFavourites.rejected, (state, action) => {
        state.loading = false;
        state.favouriteList = [];
        state.error = action.payload;
      });
  },
});

export default favouriteListSlice.reducer;
