import React, { useReducer } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import { reducer } from "./reducer";

export const StateContext = React.createContext();
export const defaultState = {
  billAmount: 0,
  tipPercentage: 0,
  peopleCount: "",
  custom: "",
  error: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.log(state);

  const calculateTipAmount = () => {
    if (
      state.billAmount === 0 ||
      state.billAmount === "" ||
      state.peopleCount === "0" ||
      state.peopleCount === ""
    ) {
      return 0;
    }
    return (
      (state.billAmount * state.tipPercentage) /
      100 /
      state.peopleCount
    ).toFixed(2);
  };

  const calculateTotalPerPerson = () => {
    if (
      state.billAmount === 0 ||
      state.billAmount === "" ||
      state.peopleCount === "0" ||
      state.peopleCount === ""
    ) {
      return 0;
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
      <div className="bg-red-500 md:bg-blue-500 w-full h-full min-h-screen flex flex-col items-center">
        <header>
          <img src="images/logo.svg" alt="" />
        </header>
        <main className=" bg-white w-full md:w-9/12 h-screen md:h-auto ">
          <h1>Bill</h1>
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
