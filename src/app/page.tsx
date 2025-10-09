import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";

export default function Home() {
  return (
    <main className="grid grid-cols-1 p-5 lg:grid-cols-12 lg:p-0 lg:mt-6 lg:gap-4">
      <ProductImage />
      <ProductInfo />
    </main>
  );
}
