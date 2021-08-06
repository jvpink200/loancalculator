import React, { useState } from "react";

function Calculator() {
    const [userValues, setUserValues] = useState({
      amount:'',
      interest:'',
      years: ''
    });
    const [result,setResult] = useState({
      monthlyPayment: '',
      totalPayment: '',
      totalInterest: '',
      isResult: false
    });
    const calculateResults = ({amount, interest, years}) => {
      const calculatedInterest = Number(interest) / 100 / 12;
      const calculatedPayment = Number(years * 12);
      const calInterestPayment = Math.pow(1 + calculatedInterest,calculatedPayment);
      const monthly = (Number(amount) * calInterestPayment * calculatedInterest) / (calInterestPayment -1);
      if(isFinite(monthly)) {
        const monthlyPaymentCalculated = monthly.toFixed(2);
        const totalPaymentCalculated = (monthly * calculatedPayment).toFixed(2);
        const totalInterestCalculated = (monthly * calculatedPayment - Number(amount)).toFixed(2);
        setResult({
          monthlyPayment: monthlyPaymentCalculated,
          totalPayment: totalPaymentCalculated,
          totalInterest: totalInterestCalculated,
          isResult: true
        });
        console.log(result);
      }
      return;
    }
    function handleResetClick() {
      setUserValues({
        amount: '',
        interest:'',
        years: ''
      });
      setResult({
        monthlyPayment: '',
        totalPayment: '',
        totalInterest: '',
        isResult: false
      });
      console.log(setUserValues);
      console.log(setResult);
    }

    function handleInputChange(event) {
      setUserValues({...userValues, [event.target.name]: event.target.value})
    }

    const handleSubmitValues = (e) => {
      e.preventDefault();
      calculateResults(userValues);
    }
    return (
      <React.Fragment>
        <div className="row mt-5 text-center">
          <div className="result pt-4">Loan Amount:{userValues.amount}</div>
          <div className="result pt-4">Interest:{userValues.interest}</div>
          <div className="result pt-4">Years to Repay:{userValues.years}</div>
          <div className="reset pt-4" onClick={handleResetClick}>
            Reset
          </div>
        </div>
        <div className="row">
          <label>Monthly Payment:</label>
          {result.monthlyPayment}
        </div>
        <div className="row">
          <label>Total Interest Payment:</label>
          {result.totalInterest}
        </div>
        <div className="row">
          <label>Total Payment:</label>
          {result.totalPayment}
        </div>
        <form onSubmit={handleSubmitValues}>
          <div className="row text-center">
            <div className="pt-4">
              <label>Amount</label>
              <input
                type="text"
                name="amount"
                value={userValues.amount}
                onChange={handleInputChange}
              />
            </div>
            <div className="pt-4">
              <label>Interest</label>
              <input
                type="text"
                name="interest"
                value={userValues.interest}
                onChange={handleInputChange}
              />
            </div>
            <div className="pt-4">
              <label>Years</label>
              <input
                type="text"
                name="years"
                value={userValues.years}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <input type="submit" />
        </form>
      </React.Fragment>
    );
}


export default Calculator;