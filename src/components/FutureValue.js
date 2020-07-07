import React, { Component } from 'react';

import './FutureValue.css';

class FutureValue extends Component {

    state = {
        initialAmount: 1000,
        years: 18,
        monthlyPayment: 1118.73,
        interest: 1.1
    }

    handleInitialAmountChange = (e) => {
        e.target.value > 100000000 ? e.target.value = 100000000 : this.setState({initialAmount: Number(e.target.value)});
    }

    handleInterestChange = (e) => {
        e.target.value > 300 ? e.target.value = 300 : this.setState({interest: Number(e.target.value)});
    }
    
    handlePeriodChange = (e) => {
        e.target.value > 300 ? e.target.value = 300 : this.setState({years: Number(e.target.value)});
    }

    handleMonthlyPaymentChange = (e) =>{
        e.target.value > 100000000 ? e.target.value = 100000000 : this.setState({monthlyPayment: Number(e.target.value)});
    }

    calculate() {
        let futureValue = this.state.initialAmount;
        
        for (let i = 0; i < this.state.years * 12; i++) {
            futureValue = futureValue + (futureValue * this.state.interest / 100);
            futureValue += this.state.monthlyPayment;
        }

        return futureValue.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }

    render() {
        return(
            <div className="container">
                <h1>Compound Interest Simulation</h1>
                <ul>
                    <label htmlFor="initial-amount">Initial amount: </label>
                    <input id="initial-amount" type="number" value={this.state.initialAmount} onChange={this.handleInitialAmountChange}></input>
                </ul>
                <ul>
                    <label htmlFor="years-period">Investment time (years): </label>
                    <input id="years-period" type="number" step="0.5" value={this.state.years} onChange={this.handlePeriodChange}></input>
                </ul>
                <ul>
                    <label htmlFor="interest">Interest: </label>
                    <input id="interest" type="number" pattern="\d+" step="0.01" value={this.state.interest} onChange={this.handleInterestChange}></input><span> % per month</span>
                </ul>
                <ul>
                    <label htmlFor="monthly-payment">Monthly payment amount: </label>
                    <input id="monthly-payment" type="number" value={this.state.monthlyPayment} onChange={this.handleMonthlyPaymentChange}></input>
                </ul>
                <h3>Result: {this.calculate()}</h3>
            </div>
        )
    }
}

export default FutureValue;