import React, { ChangeEvent, FormEvent, useState } from 'react';

import { Count } from './count';

import './App.css';

function App() {
  const initialState = { num1: '', num2: '', result: '' };
  const [{ num1, num2, result }, setState] = useState(initialState);
  const count = new Count('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value.replace(/\D+/g, '');
    const val = {[name]: value};
    const data = Object.assign({ num1, num2, result }, val);
    setState(data);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    count.sendNumbers(num1, num2)
      .then(response => {
        const val = { result: response.data.Sum };
        const data = Object.assign({ num1, num2, result }, val);
        setState(data);
      })
  };

  return (
    <div className="calculator">
      <header className="calculator-header">
        <h1>Calculator</h1>
      </header>

      <div className="container">
        <div className="calculator-content">
          <h5>Enter the numbers</h5>

          <form className="calculator-form" onSubmit={ onSubmit }>
            <div className="form-group">
              <input type="text"
                     name="num1"
                     onChange={ onChange }
                     value={ num1 }
                     className="form-control"
                     placeholder="Number 1" />
            </div>

            <div className="form-group">
              <input type="text"
                     name="num2"
                     onChange={ onChange }
                     value={ num2 }
                     className="form-control"
                     placeholder="Number 2" />
            </div>

            <div className="calculator-form--bottom">
              <button type="submit" className="btn-submit">Sum</button>
            </div>
          </form>

          <div className="result">
            <div className="result-devider"></div>

            <div className="result-input">
              <h5>Result</h5>
              <input type="text"
                     name="result"
                     value={ result }
                     className="form-control"
                     disabled
                     placeholder="Result" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
