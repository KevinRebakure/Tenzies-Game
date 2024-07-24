import Dice from "./components/Dice";
import Header from "./components/Header";
import Roll from "./components/Roll";

export default function App() {
  const randomNumbers = [];

  for (let i = 1; i <= 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 6 + 1));
  }

  console.log(randomNumbers);

  return (
    <>
      <div className="relative flex h-[100vh] w-full items-center justify-center bg-[#0B2434]">
        <div className="w-[640px] space-y-10 rounded-[20px] bg-[#F5F5F5] p-[30px]">
          <Header />
          <div className="flex w-full flex-wrap justify-center gap-10">
            {randomNumbers.map((number, index) => (
              <Dice hold={false} number={number} key={index} />
            ))}
          </div>
          <Roll />
        </div>
      </div>
    </>
  );
}
