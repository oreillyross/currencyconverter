import React from "react";

const limit = (str, length) => str.substring(0, length);

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currSource: "", currDest: "" };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    const value = e.target.value.toUpperCase();
    console.log(JSON.stringify(this.state));
    this.setState({ ...this.state, [e.target.name]: limit(value, 3) });
  };

  validate = (e) => {
    const alpha = /[A-Z, a-z]/;
    const value = e.key;
    console.log(value);
    if (!alpha.test(value)) {
      e.preventDefault();
    }
  };

  render() {
    return (
      <>
        <h3>Currency Converter</h3>
        <section>
          <form>
            <label>Source currency</label>
            <input
              value={this.state.currSource}
              type="text"
              name="currSource"
              onChange={this.handleChange}
              onKeyPress={this.validate}
            />
            <label>Destination currency</label>
            <input
              type="text"
              value={this.state.currDest}
              name="currDest"
              onChange={this.handleChange}
              onKeyPress={this.validate}
            />
            <label> Currency date</label>
            <input type="date" name="currDate" onChange={this.handleChange} />
            <section className="buttons">
              <button>Submit</button>
              <button>Reset</button>
            </section>
          </form>
          <div>The Exchange rate is ???</div>
        </section>
      </>
    );
  }
}

export { CurrencyConverter };
