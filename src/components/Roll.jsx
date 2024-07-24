export default function Roll({ rollDice, inGame }) {
  return (
    <button
      onClick={() => {
        rollDice();
      }}
      className={`mx-auto block rounded-lg ${inGame ? "bg-[#5035FF]" : "bg-[#59E391] text-black"} px-10 py-3 text-xl font-medium text-white`}
    >
      {inGame ? "Roll" : "Restart"}
    </button>
  );
}
