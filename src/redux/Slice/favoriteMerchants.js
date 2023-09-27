import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosService from '../../utlis/axiosService';

const initialState = {
  favorites: [],
  loading: false,
  error: null,
  success: false,
};

export const toggleFavoriteMerchant = createAsyncThunk(
  'favorites/toggleFavoriteMerchant',
  async (item, {rejectWithValue, getState}) => {
    console.log('ITEMMMM', item.merchant_id);
    try {
      const {bookmarked, merchant_id} = item;

      if (bookmarked) {
        await axiosService.post(
          `integration/merchant/${merchant_id}/mark-favourite/?mark=0`,
        );
      } else {
        await axiosService.post(
          `integration/merchant/${merchant_id}/mark-favourite/?mark=1`,
        );
      }
      return merchant_id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const favoriteMerchantSlice = createSlice({
  name: 'favoriteMerchants',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(toggleFavoriteMerchant.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(toggleFavoriteMerchant.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const merchantId = action.payload;
        const {favorites} = state;

        if (favorites.includes(merchantId)) {
          state.favorites = favorites.filter(id => id !== merchantId);
        } else {
          state.favorites.push(merchantId);
        }

        state.error = null;
      })
      .addCase(toggleFavoriteMerchant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});
export default favoriteMerchantSlice.reducer;
