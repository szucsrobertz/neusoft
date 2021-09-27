import { combineReducers } from "redux";

import currencyReducer from "./currency/currency.reducer";

const rootReducer = combineReducers({
  currency: currencyReducer,
});

export default rootReducer;
