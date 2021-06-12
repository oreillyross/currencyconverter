import React from "react";
import axios from "axios";
import {Currency} from "./Currency"

const limit = (str, length) => str.substring(0, length);

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rates: {}, base: "" };
  }

  handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    console.log(JSON.stringify(this.state));
    this.setState({ ...this.state, [e.target.name]: limit(value, 3) });
  };

  validate = (e) => {
    const alpha = /[A-Z, a-z]/;
    const value = e.key;
    if (!alpha.test(value)) {
      e.preventDefault();
    }
  };

  submit = (e) => {
    e.preventDefault();
    const QUERY_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_API_KEY}`;
    console.log(QUERY_URL);
    axios.get(QUERY_URL).then((res) => {
      this.setState({ rates: res.data.rates });
      this.setState({ base: res.data.base });
    });
  };

  render() {
    
    return (
      <>
        <h3>Currency Converter</h3>
        <section>
          <form>
            <button onClick={this.submit}> Get Fx Rate</button>
          </form>
          <section className="display">
            <div>The Base rate is {this.state.base}</div>
            <ul>
              <div className="currency-list">
                {Object.entries(this.state.rates).map((rate) => (
                  <Currency text={`${rate[0]} : ${rate[1]}`}/>
                ))}
              </div>
            </ul>
          </section>
        </section>
      </>
    );
  }
}

export { CurrencyConverter };
