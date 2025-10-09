export default function ProductVariants() {
  return (
    <div className="flex justify-between px-4 py-2 flex-row bg-gray-300 mb-5 rounded-md md:max-w-3/5">
      <div className="flex flex-col">
        <h3 className="text-xs text-gray-600 font-medium">COLOR</h3>
        <p className="font-semibold text-sm sm:text-base">Black</p>
      </div>

      <div className="flex flex-col ">
        <h3 className="text-xs text-gray-600 font-medium">SIZE</h3>
        <p className="font-semibold text-sm sm:text-base">42</p>
      </div>
      <div className="flex justify-center items-center">
        <h3 className="font-bold text-lg sm:text-xl">$59.00</h3>
      </div>
    </div>
  );
}
