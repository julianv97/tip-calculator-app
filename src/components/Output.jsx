import React, { useContext } from "react";
import { StateContext } from "../App";

function Output({ calculateTipAmount, calculateTotalPerPerson }) {
  const { resetState } = useContext(StateContext);
  return (
    <div>
      <div>
        <div>
          <h3>tip amount</h3>
          <p>/ person</p>
          <p>{calculateTipAmount()}</p>
        </div>
      </div>
      <div>
        <div>
          <h3>total</h3>
          <p>/ person</p>
          <p>{calculateTotalPerPerson()}</p>
        </div>
      </div>
      <button onClick={resetState}>Reset</button>
    </div>
  );
}

export default Output;
