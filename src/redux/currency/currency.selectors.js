import { createSelector } from "reselect";

const selectCurrencies = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCurrencies],
  (currency) => currency.currenciesToDisplay
);
