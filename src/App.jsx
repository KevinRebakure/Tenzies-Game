import { useEffect, useState } from "react";
import Dice from "./components/Dice";
import Header from "./components/Header";
import Roll from "./components/Roll";

export default function App() {
  const [values, setValues] = useState(generateValues());
  const [inGame, setInGame] = useState(true);

  useEffect(() => {
    const selections = values.reduce((t, value) => {
      if (value.hold) {
        return t + 1;
      } else {
        return t + 0;
      }
    }, 0);

    if (selections === 10) {
      setInGame((prev) => !prev);
    }
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
    if (inGame) {
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
      setInGame((prev) => !prev);
    }
  }

  function handleHold(dieID) {
    setValues((prev) => {
      return prev.map((die) => {
        if (die.id !== dieID && die.hold === false) {
          return die;
        } else {
          return { ...die, hold: true };
        }
      });
    });
  }

  return (
    <>
      <div className="relative flex h-[100vh] w-full items-center justify-center bg-[#0B2434]">
        <div className="w-[640px] space-y-10 rounded-[20px] bg-[#F5F5F5] p-[30px]">
          <Header />
          <div className="flex w-full flex-wrap justify-center gap-10">
            {values.map((value) => (
              <Dice
                inGame={inGame}
                value={value}
                key={value.id}
                handleHold={handleHold}
              />
            ))}
          </div>
          <Roll inGame={inGame} rollDice={rollDice} />
        </div>
      </div>
    </>
  );
}
