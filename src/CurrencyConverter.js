import React from "react";

const upper = (str) => str.toUpperCase();

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currSource: "" };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ ...this.state, [e.target.name]: value });
  };
  validate = (e) => {
    console.log(e.target.value);
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
            />
            <label>Destination currency</label>
            <input
              type="text"
              name="currDest"
              onKeyDown={this.validate}
              onChange={this.handleChange}
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
