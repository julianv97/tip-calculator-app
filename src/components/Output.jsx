import React, { useContext } from "react";
import { StateContext } from "../App";

function Output({ calculateTipAmount, calculateTotalPerPerson }) {
  const { resetState } = useContext(StateContext);
  return (
    <div className="bg-Very-dark-cyan pt-8 rounded-xl mb-10 px-2">
      <div className="flex justify-between">
        <div>
          <h3 className="text-white capitalize">tip amount</h3>
          <p className="text-sm text-gray-400">/ person</p>
        </div>
        <p className="text-5xl text-strong-cyan font-semibold">
          ${calculateTipAmount()}
        </p>
      </div>
      <div className="flex justify-between mt-12 pb-10">
        <div>
          <h3 className="text-white capitalize">total</h3>
          <p className="text-sm text-gray-400">/ person</p>
        </div>
        <p className="text-5xl text-strong-cyan font-semibold">
          ${calculateTotalPerPerson()}
        </p>
      </div>
      <div className="p-6 flex items-center justify-center">
        <button
          onClick={resetState}
          className="uppercase bg-strong-cyan w-full rounded-md text-2xl py-2 font-bold hover:bg-Light-grayish-cyan text-Very-dark-cyan "
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Output;
