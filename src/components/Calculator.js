import { useState } from 'react';
import Calc from '../logic/calculate';
import Button from './Button';

function Calculator() {
  const [state, setState] = useState([
    {
      total: null,
      next: null,
      operation: null,
    },
  ]);

  const handler = (buttonName) => {
    const { total, next, operation } = Calc(state, buttonName);
    setState({ total, next, operation });
  };
  const { total, next, operation } = state;
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
    <div className="same">
      <h2>Let&apos;s do some math!</h2>
      <div className="wrapper">
        <input className="input-field" readOnly value={display()} type="text" maxLength="0" />
        <div className="btn-wrapper">
          <Button value="AC" className="btn" onEvent={handler} />
          <Button value="+/-" className="btn" onEvent={handler} />
          <Button value="%" className="btn" onEvent={handler} />
          <Button value="÷" className="btn light" onEvent={handler} />
        </div>
        <div className="btn-wrapper">
          <Button value="7" className="btn" onEvent={handler} />
          <Button value="8" className="btn" onEvent={handler} />
          <Button value="9" className="btn" onEvent={handler} />
          <Button value="x" className="btn light" onEvent={handler} />
        </div>
        <div className="btn-wrapper">
          <Button value="4" className="btn" onEvent={handler} />
          <Button value="5" className="btn" onEvent={handler} />
          <Button value="6" className="btn" onEvent={handler} />
          <Button value="-" className="btn light" onEvent={handler} />
        </div>
        <div className="btn-wrapper">
          <Button value="1" className="btn" onEvent={handler} />
          <Button value="2" className="btn" onEvent={handler} />
          <Button value="3" className="btn" onEvent={handler} />
          <Button value="+" className="btn light" onEvent={handler} />
        </div>
        <div className="btn-wrapper">
          <Button value="0" className="btn wide" onEvent={handler} />
          <Button value="." className="btn" onEvent={handler} />
          <Button value="=" className="btn light" onEvent={handler} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
