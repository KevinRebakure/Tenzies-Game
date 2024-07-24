import Dice from "./components/Dice";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <div className="relative flex h-[100vh] w-full items-center justify-center bg-[#0B2434]">
        <div className="w-[640px] space-y-3 rounded-[20px] bg-[#F5F5F5] p-[30px]">
          <Header />
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