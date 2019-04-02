import React, { Component } from 'react';
import logo from '../resources/images/logo.svg';
import '../resources/styles/App.css';

import {Query} from "react-apollo";
import gql from 'graphql-tag';

class App extends Component {
  render() {

    const ExchangeRates = () => (
        <Query
            query={gql`
        {
            rates(currency: "USD") {
            currency
            rate
            }
        }
      `}>
          {({loading, error, data}) => {
            if (loading) return <p>Loading</p>;
            if (error) return <p>Error :( </p>;

            return data.rates.map(({currency, rate}) => (
                <div key={currency}>
                  <p>{currency}: {rate}</p>
                </div>
            ))
          }}
        </Query>
    );

    return (
        <div className="App">
          <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <h2>My first Apollo app <span role="img" aria-labelledby="rocket">🚀</span></h2>
            {ExchangeRates()}
          </header>
        </div>
    );
  }
}

export default App;
