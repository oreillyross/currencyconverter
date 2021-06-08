import React from "react";

class CurrencyConverter extends React.Component {
  render() {
    return (
      <>
        <h3>Currency Converter</h3>
        <section>
          <form>
              <label>Source currency</label>
            <input type="text" name="currSource" />
              <label>Destination currency</label>
            <input type="text" name="currDest" />
              <label> Currency date</label>
            <input type="date" name="currDate" />
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
