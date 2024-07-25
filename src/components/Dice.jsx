export default function Dice({ value, handleHold, gameOver }) {
  return (
    <button
      onClick={() => {
        handleHold(value.id);
      }}
      className={`${gameOver ? "bg-[#5035FF] hover:bg-[#5035FF] text-white" : value.hold && "bg-[#59E391] hover:bg-[#59E391] text-black"} flex size-[70px] items-center justify-center rounded-md text-2xl font-semibold shadow-lg transition-all duration-75 hover:bg-gray-300`}
    >
      {value.num}
    </button>
  );
}
