import React from "react";

//Components
import Input from "./components/Input";
import Output from "./components/Output";

//State-Context
import BillState from "./context/BillState";

function App() {
  return (
    <BillState>
      <div className=" bg-Light-grayish-cyan  w-full h-full min-h-screen flex flex-col items-center font-spacemono pb-10 ">
        <header className=" flex items-center justify-center h-20 w-full">
          <img src="images/logo.svg" alt="" />
        </header>
        <main className="bg-white border rounded-xl h-full  w-full md:w-8/12  md:h-auto px-6">
          <Input />

          <Output />
        </main>
      </div>
    </BillState>
  );
}

export default App;
