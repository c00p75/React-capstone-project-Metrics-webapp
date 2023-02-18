import { configureStore } from '@reduxjs/toolkit';
import { countriesReducer } from './countries/countries';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
