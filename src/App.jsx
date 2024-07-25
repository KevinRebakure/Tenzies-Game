import { useEffect, useState } from "react";
import Dice from "./components/Dice";
import Header from "./components/Header";
import Roll from "./components/Roll";
import Confetti from "react-confetti";

export default function App() {
  const [values, setValues] = useState(
    JSON.parse(localStorage.getItem("values")) || generateValues(),
  );

  const [end, setEnd] = useState(false);

  useEffect(() => {
    const allChecked = values.every((die) => die.hold);
    const unique = values[0].num;
    const allSimilar = values.every((die) => die.num === unique);
    if (allChecked && allSimilar) {
      setEnd(true);
      console.log("game over");
      console.log(end);
    }
  }, [values]);

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  function generateValues() {
    const _values = [];

    for (let i = 1; i <= 10; i++) {
      _values.push({
        num: Math.floor(Math.random() * 6 + 1),
        hold: false,
        id: i,
      });
    }

    return _values;
  }

  function rollDice() {
    if (!end) {
      setValues((prev) => {
        return [
          ...prev.map((die) => {
            if (die.hold) {
              return die;
            } else {
              return {
                num: Math.floor(Math.random() * 6 + 1),
                hold: false,
                id: die.id,
              };
            }
          }),
        ];
      });
    } else {
      setValues(generateValues());
      setEnd(false);
    }
  }

  function handleHold(dieID) {
    setValues((prev) => {
      return prev.map((die) => {
        if (die.id !== dieID) {
          return die;
        } else {
          return { ...die, hold: !die.hold };
        }
      });
    });
  }

  return (
    <>
      {end && <Confetti width={window.innerWidth} height={window.innerHeight} gravity={0.2} numberOfPieces={300}/>}
      <div className="relative flex h-[100vh] w-full items-center justify-center bg-[#0B2434]">
        <div className="w-[640px] space-y-10 rounded-[20px] bg-[#F5F5F5] p-[30px]">
          <Header />
          <div className="flex w-full flex-wrap justify-center gap-10">
            {values.map((value) => (
              <Dice
                value={value}
                key={value.id}
                handleHold={handleHold}
                gameOver={end}
              />
            ))}
          </div>
          <Roll rollDice={rollDice} gameOver={end} />
        </div>
      </div>
    </>
  );
}
