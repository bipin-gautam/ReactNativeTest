import {configureStore} from '@reduxjs/toolkit';
import merchantReducer from './Slice/getMerchant';
import favoriteMerchantReducer from './Slice/favoriteMerchants';
import favouriteListReducer from './Slice/getFavourites';
import merchantDetailReduced from './Slice/getMerchantDetail';

const store = configureStore({
  reducer: {
    merchants: merchantReducer,
    favoriteMerchants: favoriteMerchantReducer,
    favouriteList: favouriteListReducer,
    merchantDetailReducer: merchantDetailReduced,
    // Add other reducers if needed
  },
});

export default store;
