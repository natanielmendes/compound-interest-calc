import React from 'react';

import './FutureValue.css';

const futureValue = (props) => {
    let presentValue = 1000;
    let years = 10;
    let interest = 1.5;

    return (
        <div class="container">
            <h1>Investing Calculation</h1>
            <ul>
                <label for="present-value">Initial amount: </label>
                <input id="present-value" type="text" value={presentValue}></input>
            </ul>
            <ul>
                <label for="years-time">Investment time (years): </label>
                <input id="years-time" type="text" value={years}></input>
            </ul>
            <ul>
                <label for="interest">Interest: </label>
                <input id="interest" type="text" value={interest}></input><span> %</span>
            </ul>
            <ul>
                <label for="monthly-payment">Monthly payment amount: </label>
                <input id="monthly-payment" type="text" value={years}></input>
            </ul>
            <h3>Result: $ {futureValue}</h3>
        </div>
    )
}

export default futureValue;