import React from "react";

function Calculator() {
    return (
      <React.Fragment>
        <div className="row mt-5 text-center">
          <div className="result pt-4">Result Here</div>
        </div>
        <div className="row text-center">
          <div className="square pt-4">1</div>
          <div className="square pt-4">2</div>
          <div className="square pt-4">3</div>
          <div className="add-square pt-4">+</div>
        </div>
      </React.Fragment>
    );
}

export default Calculator;