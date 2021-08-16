import React from "react";

//Components
import Input from "./components/Input";
import Output from "./components/Output";
import Header from "./components/Header";

//State-Context
import BillState from "./context/BillState";

function App() {
  return (
    <BillState>
      <div className=" bg-Light-grayish-cyan  w-full h-full min-h-screen flex flex-col items-center font-spacemono pb-10 ">
        <Header />
        <main className="bg-white border rounded-xl h-full  w-full md:w-8/12  md:h-auto px-6">
          <Input />

          <Output />
        </main>
      </div>
    </BillState>
  );
}

export default App;
