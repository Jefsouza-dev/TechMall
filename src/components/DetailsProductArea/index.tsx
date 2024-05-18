import { useContext } from "react";
import IProduct from "../../interfaces/products";
import { formatedPrice } from "../../services/formatedPrice";
import { CartContext } from "../../contexts/CartContext";

const DetailsProductArea = (product: IProduct) => {
  const { cover, title, price, description } = product;

  const { addItemCart } = useContext(CartContext);

  const handleAddCartItem = (product: any) => {
    addItemCart(product);
  };

  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row ">
        <img
          className="flex-1 w-full max-h-72 object-contain hover:scale-110 mr-2 lg:hover:scale-125"
          src={cover}
        />
        <div className="flex-1 max-w-6xl lg:mr-58 mx-10">
          <h2 className="font-bold text-2xl mt-4 mb-2">{title}</h2>
          <strong className="text-zinc-700/90 text-x1">
            {formatedPrice(price)}
          </strong>
          <p className="my-4">{description}</p>

          <button
            className="bg-zinc-900 p-3 rounded-lg  text-white hover:scale-110"
            onClick={() => handleAddCartItem(product)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailsProductArea;
