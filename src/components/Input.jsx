import React, { useContext } from "react";
import BillContext from "../context/BillContext";

const percentages = [5, 10, 15, 25, 50];

function Input() {
  const billContext = useContext(BillContext);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="pb-10 pt-10">
      <h1 className="text-gray-500 font-semibold">Bill</h1>
      <div className="bg-Light-grayish-cyan-1 w-full flex justify-between ">
        <label htmlFor="bill-amount" className="flex items-center pl-2 pr-2">
          <img src="images/icon-dollar.svg" alt="" />
        </label>
        <input
          type="number"
          id="bill-ampunt"
          value={billContext.state.billAmount}
          placeholder="0"
          onChange={(e) =>
            billContext.handleChangeInput("CHANGE_BILL_AMOUNT", e.target.value)
          }
          className="w-full rounded-lg text-right bg-Light-grayish-cyan-1 text-2xl outline-none focus:ring-2 focus:ring-strong-cyan"
        />
      </div>
      <p className="capitalize text-gray-500 font-semibold pt-10">
        select tip %
      </p>
      <div className="grid grid-cols-2 gap-4 grid-rows-3 md:grid-cols-3 py-6">
        {percentages.map((percentage, index) => {
          return (
            <button
              key={index}
              value={percentage}
              onClick={() => {
                billContext.handleChangeInput("SET_TIP", percentage);
              }}
              className={
                "bg-Very-dark-cyan text-white font-bold text-xl py-2 rounded-lg hover:bg-strong-cyan hover:text-Very-dark-cyan"
              }
            >
              {percentage}%
            </button>
          );
        })}
        <input
          type="number"
          placeholder="Custom"
          value={billContext.state.custom}
          onChange={(e) => {
            billContext.handleChangeInput("SET_TIP", e.target.value);
            billContext.handleChangeInput("SET_CUSTOM", e.target.value);
          }}
          className="w-full rounded-lg text-center bg-Light-grayish-cyan-1 text-2xl outline-none focus:ring-2 focus:ring-strong-cyan"
        />
      </div>
      <div>
        <label htmlFor="people-count" className="text-gray-500 font-semibold">
          Number of People
        </label>
        <div className="bg-Light-grayish-cyan-1 w-full flex justify-between ">
          <label className="flex items-center pl-2 pr-2">
            <img src="images/icon-person.svg" alt="" />
          </label>
          <input
            type="number"
            id="people-count"
            placeholder="0"
            value={billContext.state.peopleCount}
            onChange={(e) =>
              billContext.handleChangeInput("SET_PEOPLE_COUNT", e.target.value)
            }
            className={
              billContext.state.error
                ? "w-full rounded-lg text-right bg-Light-grayish-cyan-1outline-none focus:ring-2 focus:ring-red-600 outline-none text-2xl"
                : "w-full rounded-lg text-right bg-Light-grayish-cyan-1 text-2xl outline-none focus:ring-2 focus:ring-strong-cyan"
            }
          />
        </div>
      </div>
    </form>
  );
}

export default Input;
