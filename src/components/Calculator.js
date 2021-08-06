import React, { useState } from "react";

function Calculator() {
    const [userValues, setUserValues] = useState({
      amount:'',
      interest:'',
      years: ''
    });
    function handleResetClick() {
      setUserValues('');
      console.log(userValues);
      console.log(setUserValues);
    }
    return (
      <React.Fragment>
        <div className="row mt-5 text-center">
          <div className="result pt-4">Result:</div>
          <div className="reset pt-4" onClick={handleResetClick}>
            Reset
          </div>
        </div>
        <form>
          <div className="row text-center">
            <div className="square pt-4">
              <label>Amount</label>
              <input
                type="text"
                value={userValues.amount}
                onChange={handleInputChange}
              />
            </div>
            <div className="square pt-4">
              <input
                type="text"
                value={userValues.interest}
                onChange={handleInputChange}
              />
            </div>
            <div className="square pt-4">
              <input
                type="text"
                value={userValues.years}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
      </React.Fragment>
    );
}


export default Calculator;