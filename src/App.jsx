import Dice from "./components/Dice";

export default function App() {
  return (
    <>
      <div className="relative flex h-[100vh] w-full items-center justify-center bg-[#0B2434]">
        <div className="w-[640px] space-y-3 rounded-[20px] bg-[#F5F5F5] p-[30px]">
          <h1 className="text-center text-4xl font-bold">Tenzies</h1>
          <p className="mx-auto w-[300px] text-center">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <div className="flex w-full flex-wrap gap-10 justify-center">
            <Dice hold={true} number={2}/>
            <Dice hold={false} number={4}/>
            <Dice hold={false} number={3}/>
            <Dice hold={true} number={2}/>
            <Dice hold={true} number={2}/>
            <Dice hold={false} number={5}/>
            <Dice hold={false} number={6}/>
            <Dice hold={true} number={2}/>
            <Dice hold={false} number={3}/>
            <Dice hold={true} number={2}/>
          </div>
        </div>
      </div>
    </>
  );
}