import React from "react";
import { connect } from "react-redux";

import "./styles.css";

import fetchCurrencySymbols from "../../redux/currency/fetchCurrencySymbols";
import fetchCurrencyRates from "../../redux/currency/fetchCurrencyRates";
import CurrencyCard from "../CurrencyCard";
import CurrencyModal from "../CurrencyModal";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCurrencyModal: false,
      cardsProps: [],
    };
  }

  componentDidMount() {
    this.props.fetchCurrencySymbolsTest(); // fetch for currency symbols

    this.props.fetchCurrencyRatesTest(); //fetch for rates with EUR base
  }

  componentDidUpdate(prevProps) {
    // condition when props change, change exchange
    // (){ }
    if (prevProps.currenciesToDisplay !== this.props.currenciesToDisplay) {
      const test = this.mappCurrenciesRatesToExchange();
      this.setState({ cardsProps: test });
    }
  }

  openCurrencyModal = () => {
    this.setState({ showCurrencyModal: !this.state.showCurrencyModal });
  };

  mappCurrenciesRatesToExchange() {
    const { currenciesRates, currenciesToDisplay } = this.props;

    let mappedCurrencies = currenciesToDisplay.map((currency) => {
      return {
        value: currenciesRates[currency],
        symbol: currency,
      };
    });

    return mappedCurrencies;
  }

  render() {
    return (
      <div>
        <div className="container-title">
          Currency Exchange
          <br />
          {new Date().toLocaleString() + ""}
        </div>
        <CurrencyModal
          showCurrencyModal={this.state.showCurrencyModal}
          props={this.props}
          openCurrencyModal={this.openCurrencyModal}
        />
        <div className="container-card">
          <CurrencyCard
            key={"eur"}
            currency={{ symbol: "EUR", value: 1, base: true }}
            props={this.props}
          />
          {this.state.cardsProps.map((currency, index) => (
            <CurrencyCard key={index} currency={currency} props={this.props} />
          ))}
        </div>

        <div>
          <button onClick={this.openCurrencyModal} className="container-button">
            Add Currency
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currencySymbols: state.currency.currencySymbols,
    currenciesToDisplay: state.currency.currenciesToDisplay || [],
    currenciesRates: state.currency.currenciesRates,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencySymbolsTest: () => dispatch(fetchCurrencySymbols()),
  fetchCurrencyRatesTest: () => dispatch(fetchCurrencyRates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
