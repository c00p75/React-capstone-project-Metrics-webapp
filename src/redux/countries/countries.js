import { createAsyncThunk } from '@reduxjs/toolkit';

const COUNTRIES = 'App/redux/countries/COUNTRIES';

export const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case `${COUNTRIES}/fulfilled`:
      return action.payload;

    default:
      return state;
  }
};

export const fetchCountries = createAsyncThunk(
  COUNTRIES, async () => {
    let data;
    await await fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((json) => {
        data = json;
      });
    return data;
  },
);
