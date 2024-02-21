import { useState, useEffect } from "react";
import IProduct from "../../interfaces/products";
import products from "../../services/products";
import SelectInput from "../../components/SelectInput";
import Card from "../../components/Card";
import Input from "../../components/Input";

const Home = () => {
  const [allProducts] = useState<IProduct[]>(products);
  const [productsShownOnScreen, setProductsShownOnScreen] =
    useState<IProduct[]>(products);
  const [sortOption, setSortOption] = useState<string>("");

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  useEffect(() => {
    sortProducts(sortOption);
  }, [sortOption]);

  const sortProducts = (option: string) => {
    const sortedProducts = [...allProducts];

    if (option === "price") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "inclusionDate") {
      sortedProducts.sort(
        (a, b) => a.inclusionDate.getTime() - b.inclusionDate.getTime()
      );
    }

    setProductsShownOnScreen(sortedProducts);
  };

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto mt-6 ">
        <Input
          allProducts={allProducts}
          setProductsShownOnScreen={setProductsShownOnScreen}
        />

        <SelectInput handleSortChange={handleSortChange} />

        <div className="grid grid-cols-1 gap-6 mb-16 flex-col mt-6 md:grid-cols-2 lg:grid-cols-3">
          {productsShownOnScreen.map((product: IProduct) => {
            return <Card key={product.id} {...product} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
