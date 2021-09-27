//1 is default value for Euro

export const test = (baseCurrency = 1, currencyRate, inputValue) => {
  // if euro is base, base currency = 1
  // else baseCurrency ii base.value
  return (inputValue * currencyRate) / baseCurrency;
};
