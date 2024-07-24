export default function Dice({ hold, number }) {
  return (
    <p
      className={`${hold && "bg-[#59E391] hover:bg-[#59E391]"} flex size-[70px] items-center justify-center rounded-md text-2xl font-semibold shadow-lg transition-all duration-75 hover:bg-gray-300`}
    >
      {number}
    </p>
  );
}
