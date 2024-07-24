import { useState } from "react";
import Dice from "./components/Dice";
import Header from "./components/Header";
import Roll from "./components/Roll";

export default function App() {
  const[values, setValues] = useState(generateValues()) 
  
  function generateValues() {
    const _values = [];

    for (let i = 1; i <= 10; i++) {
      _values.push(Math.floor(Math.random() * 6 + 1));
    }

    return _values
  }

  function rollDice() {
    setValues(generateValues())
  }

  console.log(values);

  return (
    <>
      <div className="relative flex h-[100vh] w-full items-center justify-center bg-[#0B2434]">
        <div className="w-[640px] space-y-10 rounded-[20px] bg-[#F5F5F5] p-[30px]">
          <Header />
          <div className="flex w-full flex-wrap justify-center gap-10">
            {values.map((number, index) => (
              <Dice hold={false} number={number} key={index} />
            ))}
          </div>
          <Roll rollDice={rollDice} />
        </div>
      </div>
    </>
  );
}
