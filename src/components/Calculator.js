import React, { useState } from "react";

function Calculator() {
    const [add, setAdd] = useState(0);
    const [result, setResult] = useState(add);
    return (
      <React.Fragment>
        <div className="row mt-5 text-center">
          <div className="result pt-4">Result:</div>
        </div>
        <div className="row text-center">
          <div className="square pt-4">1</div>
          <div className="square pt-4">2</div>
          <div className="square pt-4">3</div>
          <div className="add-square pt-4">+</div>
        </div>
        <div className="row text-center">
          <div className="square pt-4">4</div>
          <div className="square pt-4">5</div>
          <div className="square pt-4">6</div>
          <div className="subtract-square pt-4">-</div>
        </div>
        <div className="row text-center">
          <div className="square pt-4">7</div>
          <div className="square pt-4">8</div>
          <div className="square pt-4">9</div>
          <div className="equal-square pt-4">=</div>
        </div>
      </React.Fragment>
    );
}

export default Calculator;