// favoriteMerchantSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosService from '../../utlis/axiosService';

// Define the initial state
const initialState = {
  favorites: [], // Stores the list of favorite merchants
  loading: false,
  error: null,
  success: false,
};

// Define an async thunk to add or remove a merchant from favorites
export const toggleFavoriteMerchant = createAsyncThunk(
  'favorites/toggleFavoriteMerchant',
  async (item, {rejectWithValue, getState}) => {
    console.log('ITEMMMM', item.merchant_id);
    try {
      const {bookmarked, merchant_id} = item;

      // If the merchant is already a favorite, remove it; otherwise, add it.
      if (bookmarked) {
        // Make an API call to remove the merchant from favorites
        await axiosService.post(
          `integration/merchant/${merchant_id}/mark-favourite/?mark=0`,
        );
      } else {
        // Make an API call to add the merchant to favorites
        await axiosService.post(
          `integration/merchant/${merchant_id}/mark-favourite/?mark=1`,
        );
      }
      // integration/merchant/20713_loyalize/mark-favourite/?mark=1
      // Update the list of favorite merchants in the state
      return merchant_id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Create a slice that generates actions and reducer
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

        // Toggle the favorite status (add if not present, remove if present)
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

// Export the async thunk for use in components

// Export the reducer
export default favoriteMerchantSlice.reducer;
