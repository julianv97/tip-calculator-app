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
  const resetState = () => {
    dispatch({ type: "RESET_VALUES" });
  };
  const falsyValue =
    state.billAmount === 0 ||
    state.billAmount === "" ||
    state.peopleCount === "0" ||
    state.peopleCount === "" ||
    state.billAmount < 0 ||
    state.peopleCount < "0";

  const calculateTipAmount = () => {
    if (falsyValue) {
      return (0.0).toFixed(2);
    }
    return (
      (state.billAmount * state.tipPercentage) /
      100 /
      state.peopleCount
    ).toFixed(2);
  };

  const calculateTotalPerPerson = () => {
    if (falsyValue) {
      return (0.0).toFixed(2);
    }
    return (
      (parseFloat(state.billAmount * (state.tipPercentage / 100)) +
        parseFloat(state.billAmount)) /
      state.peopleCount
    ).toFixed(2);
  };

  return (
    <BillContext.Provider
      value={{
        state,
        handleChangeInput,
        resetState,
        calculateTipAmount,
        calculateTotalPerPerson,
      }}
    >
      {props.children}
    </BillContext.Provider>
  );
};

export default BillState;
