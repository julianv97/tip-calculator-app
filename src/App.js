import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState("0.00");
  const [peopleCount, setPeopleCount] = useState(1);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [custom, setCustom] = useState();
  const percentages = [5, 10, 15, 25, 50];

  const calculateTipAmount = () => {
    return (amount * tipPercentage) / 100 / peopleCount;
  };

  const calculateTotalPerPerson = () => {
    let totalTipAmount = amount * (tipPercentage / 100);
    let totalBillAmount = parseFloat(totalTipAmount) + parseInt(amount);
    let totalBillAmountPerPerson = totalBillAmount / peopleCount;
    return totalBillAmountPerPerson;
  };

  const resetState = () => {
    setAmount(0);
    setPeopleCount(0);
    setTipPercentage(0);
    setCustom(0);
  };

  return (
    <div className="bg-red-500 md:bg-blue-500 w-full h-full min-h-screen flex flex-col items-center">
      <header>
        <img src="images/logo.svg" alt="" />
      </header>
      <main className=" bg-white w-full md:w-9/12 h-screen md:h-auto ">
        <section className="  ">
          <h1>Bill</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <p className="capitalize">select tip %</p>
            <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3">
              {percentages.map((percentage) => {
                return (
                  <button
                    value={percentage}
                    onClick={() => setTipPercentage(percentage)}
                  >
                    {percentage}
                  </button>
                );
              })}
              <input
                type="number"
                placeholder="custom"
                value={custom}
                onChange={(e) => setTipPercentage(e.target.value)}
              />
            </div>
            <div>
              <label for="people-count">Number of People</label>
              <input
                type="text"
                id="people-count"
                value={peopleCount}
                onChange={(e) => setPeopleCount(e.target.value)}
              />
            </div>
          </form>
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
        </section>
      </main>
    </div>
  );
}

export default App;
