import React, { useReducer } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import { reducer } from "./reducer";

export const StateContext = React.createContext();
export const defaultState = {
  billAmount: "",
  tipPercentage: 0,
  peopleCount: "",
  custom: "",
  error: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const falsyValue =
    state.billAmount === 0 ||
    state.billAmount === "" ||
    state.peopleCount === "0" ||
    state.peopleCount === "";

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

  const handleChangeInput = (type, payload) => {
    dispatch({ type: type, payload: payload });
  };

  const resetState = () => {
    dispatch({ type: "RESET_VALUES" });
  };

  return (
    <StateContext.Provider value={{ state, resetState }}>
      <div className=" bg-Light-grayish-cyan  w-full h-full min-h-screen flex flex-col items-center font-spacemono pb-10 ">
        <header className=" flex items-center justify-center h-20 w-full">
          <img src="images/logo.svg" alt="" />
        </header>
        <main className="bg-white border rounded-xl h-full  w-full md:w-8/12  md:h-auto px-6">
          <Input handleChangeInput={handleChangeInput} />

          <Output
            calculateTipAmount={calculateTipAmount}
            calculateTotalPerPerson={calculateTotalPerPerson}
          />
        </main>
      </div>
    </StateContext.Provider>
  );
}

export default App;
