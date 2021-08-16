import React, { useReducer } from "react";

import BillContext from "./BillContext";
import reducer from "./BillReducer";

const BillState = (props) => {
  const defaultState = {
    billAmount: "",
    tipPercentage: 0,
    peopleCount: "",
    custom: "",
    error: false,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleChangeInput = (type, payload) => {
    dispatch({ type: type, payload: payload });
  };

  return (
    <BillContext.Provider value={{ state, handleChangeInput }}>
      {props.children}
    </BillContext.Provider>
  );
};

export default BillState;
