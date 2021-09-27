import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  removeCurrency,
  getBaseCurrency,
} from "../../redux/currency/currency.actions";
import { test } from "../../utils/index";

import "./styles.css";

const CurrencyCard = ({
  currency,
  removeCurrencyTest,
  getBaseCurrencyTest,
  base,
}) => {
  const [curencyState, setCurrencyState] = useState(currency);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    const test1 = {
      value: test(1, currency.value, base.value),
      symbol: currency.symbol,
    };

    if (base.symbol !== "EUR") {
      //it's not possible to change the base from EUR
      // fetch(
      //   `http://api.exchangeratesapi.io/v1/latest?access_key=f5c2d846320acb201f0cafaf8fae6327?base=${base.symbol}`
      // )
      //   .then((response) => response.json()).then(res=> res.rates)
      alert("not possible to change base from this api");
    }

    setCurrencyState(test1);
  }, [base]);

  const onChangeAmount = (event) => {
    getBaseCurrencyTest(event.target.value, currency.symbol);
  };

  return (
    <div
      className={"card"}
      onClick={() => setIsClicked(!isClicked)}
      style={{ background: isClicked ? "lightblue" : "white" }}
    >
      <div
        className="close-button"
        onClick={() => removeCurrencyTest(currency.symbol)}
      >
        X
      </div>
      <div className="card-information">
        <div>
          <input
            name="amount"
            type="number"
            value={curencyState.value}
            onChange={(event) => {
              onChangeAmount(event);
            }}
          ></input>
          <div>{curencyState.symbol}</div>
          <div>
            1 {base.symbol} = {currency.value} {currency.symbol}
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { base: state.currency.base };
}

const mapDispatchToProps = (dispatch) => ({
  removeCurrencyTest: (currency) => dispatch(removeCurrency(currency)),
  getBaseCurrencyTest: (inputValue, symbol) =>
    dispatch(getBaseCurrency(inputValue, symbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyCard);
