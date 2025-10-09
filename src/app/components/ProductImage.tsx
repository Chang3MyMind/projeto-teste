import Image from "next/image";

export default function ProductImage() {
  return (
    <div className="justify-center items-center flex mb-5 px-4 md:mb-8 lg:px-0 lg:col-start-1 lg:col-span-5 lg:mb-0">
      <Image
        src="/nikeAir.png"
        alt="image of a Black Leather Shoe"
        width={0}
        height={0}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="w-full max-w-3xs sm:max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover"
      />
    </div>
  );
}
