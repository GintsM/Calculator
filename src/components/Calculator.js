import React from 'react';
import Calc from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const handler = (buttonName) => {
      const name = buttonName.target.innerText;
      const { total, next, operation } = Calc(this.state, name);
      this.setState({ total, next, operation });
    };
    const { total, next, operation } = this.state;

    const display = () => {
      if (next) {
        return next;
      }

      if (operation) {
        return operation;
      }
      if (total) {
        return total;
      }
      return 0;
    };

    return (
      <div className="wrapper">
        <input className="input-field" value={display()} type="text" maxLength="0" onChange={() => ''} />
        <div className="btn-wrapper">
          <button className="btn" type="button" onClick={handler}>AC</button>
          <button className="btn" type="button" onClick={handler}>+/-</button>
          <button className="btn" type="button" onClick={handler}>%</button>
          <button className="btn light" type="button" onClick={handler}>÷</button>
        </div>
        <div className="btn-wrapper">
          <button className="btn" type="button" onClick={handler}>7</button>
          <button className="btn" type="button" onClick={handler}>8</button>
          <button className="btn" type="button" onClick={handler}>9</button>
          <button className="btn light" type="button" onClick={handler}>x</button>
        </div>
        <div className="btn-wrapper">
          <button className="btn" type="button" onClick={handler}>4</button>
          <button className="btn" type="button" onClick={handler}>5</button>
          <button className="btn" type="button" onClick={handler}>6</button>
          <button className="btn light" type="button" onClick={handler}>-</button>

        </div>
        <div className="btn-wrapper">
          <button className="btn" type="button" onClick={handler}>1</button>
          <button className="btn" type="button" onClick={handler}>2</button>
          <button className="btn" type="button" onClick={handler}>3</button>
          <button className="btn light" type="button" onClick={handler}>+</button>
        </div>
        <div className="btn-wrapper">
          <button className="btn" type="button" onClick={handler}>0</button>
          <button className="btn light-end" type="button" onClick={handler}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
