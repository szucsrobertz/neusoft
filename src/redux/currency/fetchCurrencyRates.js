import { fetchCurrencyRates } from "./currency.actions";

export default function fetchCurrencySymbols() {
  return (dispatch) => {
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=f5c2d846320acb201f0cafaf8fae6327"
    )
      .then((response) => response.json())
      .then((res) => {
        let currenciesRates = res.rates;
        dispatch(fetchCurrencyRates(currenciesRates));
      });
  };
}
