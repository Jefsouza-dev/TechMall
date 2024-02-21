import { useRef } from "react";
import IProduct from "../../interfaces/products";

interface IInputProps {
  allProducts: IProduct[];
  setProductsShownOnScreen: (filteredProducts: IProduct[]) => void;
}

const Input = ({ allProducts, setProductsShownOnScreen }: IInputProps) => {
  const inputValue = useRef<HTMLInputElement>(null);

  function filterProducts() {
    const currentProducts = allProducts.filter((product) =>
      product.title
        .toLowerCase()
        .includes(inputValue.current?.value.toLowerCase() || "")
    );

    setProductsShownOnScreen(currentProducts);
  }

  return (
    <div className="flex justify-center gap-6 ">
      <input
        className="w-5/6 border-2 rounded-md h-11 px-3 outline-none lg:w-2/4"
        placeholder="Pesquisar"
        ref={inputValue}
        onChange={filterProducts}
      />
    </div>
  );
};

export default Input;
