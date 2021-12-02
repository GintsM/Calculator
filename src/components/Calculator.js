import React from 'react';
import Calc from '../logic/calculate';
import Button from './Button';

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
    const handler = (ButtonName) => {
      const name = ButtonName.target.innerText;
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
        <input className="input-field" readOnly value={display()} type="text" maxLength="0" />
        <div className="btn-wrapper">
          <Button value="AC" className="btn" click={handler} />
          <Button value="+/-" className="btn" click={handler} />
          <Button value="%" className="btn" click={handler} />
          <Button value="÷" className="btn light" click={handler} />
        </div>
        <div className="btn-wrapper">
          <Button value="7" className="btn" click={handler} />
          <Button value="8" className="btn" click={handler} />
          <Button value="9" className="btn" click={handler} />
          <Button value="x" className="btn light" click={handler} />
        </div>
        <div className="btn-wrapper">
          <Button value="4" className="btn" click={handler} />
          <Button value="5" className="btn" click={handler} />
          <Button value="6" className="btn" click={handler} />
          <Button value="-" className="btn light" click={handler} />
        </div>
        <div className="btn-wrapper">
          <Button value="1" className="btn" click={handler} />
          <Button value="2" className="btn" click={handler} />
          <Button value="3" className="btn" click={handler} />
          <Button value="+" className="btn light" click={handler} />
        </div>
        <div className="btn-wrapper">
          <Button value="0" className="btn wide" click={handler} />
          <Button value="." className="btn" click={handler} />
          <Button value="=" className="btn light" click={handler} />
        </div>
      </div>
    );
  }
}

export default Calculator;
