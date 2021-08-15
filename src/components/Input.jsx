import React, { useContext } from "react";
import { StateContext } from "../App";

const percentages = [5, 10, 15, 25, 50];

function Input({ handleChangeInput }) {
  const { state } = useContext(StateContext);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="number"
        value={state.billAmount}
        onChange={(e) =>
          handleChangeInput("CHANGE_BILL_AMOUNT", e.target.value)
        }
      />
      <p className="capitalize">select tip %</p>
      <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3">
        {percentages.map((percentage, index) => {
          return (
            <button
              key={index}
              value={percentage}
              onClick={() => handleChangeInput("SET_TIP", percentage)}
            >
              {percentage}
            </button>
          );
        })}
        <input
          type="text"
          placeholder="custom"
          value={state.custom}
          onChange={(e) => {
            handleChangeInput("SET_TIP", e.target.value);
            handleChangeInput("SET_CUSTOM", e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="people-count">Number of People</label>

        <input
          type="text"
          id="people-count"
          placeholder="0"
          value={state.peopleCount}
          onChange={(e) =>
            handleChangeInput("SET_PEOPLE_COUNT", e.target.value)
          }
          className={state.error ? "bg-red-500" : "bg-green-500"}
        />
      </div>
    </form>
  );
}

export default Input;
