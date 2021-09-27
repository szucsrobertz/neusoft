import { addCurrenciesToState } from "./currency.actions";
import CurrencyActionTypes from "./currency.types";

const initialState = {
  currencySymbols: [],
  pending: false,
  error: null,
  currenciesToDisplay: [],
  currenciesRates: {},
  base: {
    value: 1,
    symbol: "EUR",
  },
};

export default function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case CurrencyActionTypes.FETCH_CURRENCY_SYMBOLS_SUCCES:
      return {
        ...state,
        pending: false,
        currencySymbols: action.payload,
      };

    case CurrencyActionTypes.ADD_CURRENCIES:
      return {
        ...state,
        currenciesToDisplay: addCurrenciesToState(
          state.currenciesToDisplay,
          action.payload
        ),
      };
    case CurrencyActionTypes.FETCH_CURRENCY_RATES:
      return {
        ...state,
        currenciesRates: action.payload,
      };
    case CurrencyActionTypes.REMOVE_CURRENCY:
      return {
        ...state,
        currenciesToDisplay: state.currenciesToDisplay.filter(
          (currency) => currency !== action.payload
        ),
      };
    case CurrencyActionTypes.GET_BASE_CURRENCY:
      return {
        ...state,
        base: { value: action.baseValue, symbol: action.baseSymbol },
      };
    default:
      return state;
  }
}
