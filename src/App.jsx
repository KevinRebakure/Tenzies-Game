export default function App() {
  return (
    <>
      <div className="relative flex h-[100vh] w-full items-center justify-center bg-[#0B2434]">
        <div className="w-[640px] rounded-[20px] bg-[#F5F5F5] p-[30px] space-y-3">
          <h1 className="text-center text-4xl font-bold">Tenzies</h1>
          <p className="text-center w-[300px] mx-auto">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
      </div>
    </>
  );
}