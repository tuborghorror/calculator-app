import React from 'react';
import axios from 'axios';

export class Count extends React.Component {
  public sendNumbers(num1: string, num2: string) {
    return axios
      .post(process.env.REACT_APP_BASE_URL + `/api/count_sum?firstNumber=${ num1 }&secondNumber=${ num2 }`);
  }
}
