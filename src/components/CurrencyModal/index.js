import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { addCurrencies } from "../../redux/currency/currency.actions";

import "./styles.css";

const CurrencyModal = ({
  currencySymbols,
  showCurrencyModal,
  openCurrencyModal,
  addCurrenciesTest,
}) => {
  const modalRef = useRef();
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const currencies = Object.entries(currencySymbols);
  const [clickedItem, setClickedItem] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {}, [id]);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      openCurrencyModal();
    }
  };

  const addToStateSelectedCurrencies = (selectedCurrencies) => {
    addCurrenciesTest(selectedCurrencies);
  };

  const addSelectedCurrencies = (symbol, isSelected, index) => {
    setIsSelected(!isSelected);
    setId(index);

    const existingCurrencies = selectedCurrencies.find(
      (currency) => currency === symbol
    );
    if (existingCurrencies) {
      setSelectedCurrencies(
        selectedCurrencies.filter((currency) => currency !== symbol)
      );
      setClickedItem(existingCurrencies);
    } else {
      setSelectedCurrencies([...selectedCurrencies, symbol]);
      setClickedItem([...selectedCurrencies]);
    }
  };

  return (
    <div>
      {showCurrencyModal ? (
        <div
          className="container-background"
          onClick={closeModal}
          ref={modalRef}
        >
          <div className="container-modal">
            {currencies.map((symbol, index) => (
              <div
                key={index}
                onClick={() => {
                  addSelectedCurrencies(symbol[0], isSelected, index);
                }}
                className={
                  clickedItem.includes(symbol[0]) || id === index
                    ? "clicked"
                    : "container-currency"
                }
              >
                {symbol[0]} {symbol[1]}
              </div>
            ))}
          </div>
          <button
            className="container-add-button"
            onClick={() => {
              addToStateSelectedCurrencies(selectedCurrencies);
              openCurrencyModal();
            }}
          >
            Add Currency
          </button>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currenciesToDisplay: state.currency.currenciesToDisplay,
    currencySymbols: state.currency.currencySymbols,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addCurrenciesTest: (currencies) => dispatch(addCurrencies(currencies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyModal);
