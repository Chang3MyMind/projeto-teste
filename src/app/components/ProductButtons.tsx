export default function ProductButtons() {
  return (
    <div className="flex gap-3 justify-center items-center flex-wrap md:justify-start">
      <button className="bg-purple-500 text-white px-4 py-2 rounded-sm cursor-pointer text-sm sm:text-base md:text-lg md:px-6 hover:bg-purple-600 transition-colors">
        Add to cart
      </button>
      <button className="px-4 py-2 border border-black rounded-sm cursor-pointer text-sm sm:text-base md:text-lg md:px-6 hover:bg-gray-100 transition-colors">
        Add to wishlist
      </button>
    </div>
  );
}
