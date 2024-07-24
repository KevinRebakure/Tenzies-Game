export default function Dice({ value, handleHold, inGame }) {
  return (
    <button
      onClick={() => {
        handleHold(value.id);
      }}
      className={`${value.hold && "bg-[#59E391] hover:bg-[#59E391]"} ${!inGame && "bg-[#5035FF] text-white"} flex size-[70px] items-center justify-center rounded-md text-2xl font-semibold shadow-lg transition-all duration-75 hover:bg-gray-300`}
    >
      {value.num}
    </button>
  );
}
