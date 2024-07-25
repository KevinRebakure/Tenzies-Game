export default function Roll({ rollDice, gameOver }) {
  return (
    <button
      onClick={() => {
        rollDice();
      }}
      className={`mx-auto block rounded-lg ${gameOver ? "bg-[#59E391]" : "bg-[#5035FF]"} px-10 py-3 text-xl font-medium text-white`}
    >
      {gameOver ? "New Game" : "Roll"}
    </button>
  );
}
