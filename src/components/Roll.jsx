export default function Roll({ rollDice }) {
  return (
    <button
      onClick={() => {
        rollDice();
      }}
      className={`mx-auto block rounded-lg bg-[#5035FF] px-10 py-3 text-xl font-medium text-white`}
    >
      Roll
    </button>
  );
}
