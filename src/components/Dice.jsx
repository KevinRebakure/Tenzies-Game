export default function Dice({hold, number}) {
    return <p className={`${hold && 'bg-[#59E391] hover:bg-[#59E391]'} shadow-lg flex items-center justify-center size-[70px] rounded-md hover:bg-gray-300 transition-all duration-100 text-2xl font-semibold`}>{number}</p>;
}