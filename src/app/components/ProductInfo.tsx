import Navigation from "./Navigation";
import ProductButtons from "./ProductButtons";
import ProductDesc from "./ProductDescripition";
import ProductHightlights from "./ProductHightlights";
import ProductVariants from "./ProductVariants";

export default function ProductInfo() {
  return (
    <div className="flex flex-col gap-3 lg:col-start-6 lg:col-span-6 lg:gap-8">
      <Navigation />
      <ProductDesc />
      <ProductHightlights />
      <ProductVariants />
      <ProductButtons />
    </div>
  );
}
