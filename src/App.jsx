import Dice from "./components/Dice";
import Header from "./components/Header";
import Roll from "./components/Roll";

export default function App() {
  return (
    <>
      <div className="relative flex h-[100vh] w-full items-center justify-center bg-[#0B2434]">
        <div className="space-y-10 w-[640px] rounded-[20px] bg-[#F5F5F5] p-[30px]">
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
          <Roll />
        </div>
      </div>
    </>
  );
}