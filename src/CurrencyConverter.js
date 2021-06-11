import React from "react";
import axios from "axios";

const limit = (str, length) => str.substring(0, length);

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currDest: "", rates: {} };
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
    const { currDest } = this.state;
    const QUERY_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_EXCHANGERATE_API_KEY}&symbols=${currDest}`;
    console.log(QUERY_URL);
    axios.get(QUERY_URL).then((res) => {
      this.setState({ rates: res.data.rates });
    });
  };


  render() {
    return (
      <>
        <h3>Currency Converter</h3>
        <section>
          <form>
            <button onClick={this.submit}></button>
          </form>
          <div>
            {Object.entries(this.state.rates).map((rate) => (
              <div>
                {rate[0]} {rate[1]}
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export { CurrencyConverter };
