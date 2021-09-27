import CurrencyActionTypes from "./currency.types";

export const fetchCurrencySymbolsSucces = (item) => ({
  type: CurrencyActionTypes.FETCH_CURRENCY_SYMBOLS_SUCCES,
  payload: item,
});

export const fetchCurrencyRates = (item) => ({
  type: CurrencyActionTypes.FETCH_CURRENCY_RATES,
  payload: item,
});

export const fetchCurrencySymbolsError = (error) => ({
  type: CurrencyActionTypes.FETCH_CURRENCY_SYMBOLS_ERROR,
  error: error,
});

export const fetchCurrencySymbolsPending = () => ({
  type: CurrencyActionTypes.FETCH_CURRENCY_SYMBOLS_PENDING,
});

export const addCurrencies = (item) => ({
  type: CurrencyActionTypes.ADD_CURRENCIES,
  payload: item,
});

export const addCurrenciesToState = (currenciesToDisplay, currenciesToAdd) => {
  const newCurrenciesToDisplay = [
    ...new Set([...currenciesToDisplay, ...currenciesToAdd]),
  ];
  return newCurrenciesToDisplay;
};

export const removeCurrency = (item) => ({
  type: CurrencyActionTypes.REMOVE_CURRENCY,
  payload: item,
});

export const getBaseCurrency = (baseValue, baseSymbol) => ({
  type: CurrencyActionTypes.GET_BASE_CURRENCY,
  baseValue,
  baseSymbol,
});
