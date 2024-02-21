const ShowAmount = ({ cartAmount }: { cartAmount: number }) => {
  return (
    <span className="absolute -top-3 -right-3  px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-ts">
      {cartAmount}
    </span>
  );
};

export default ShowAmount;
