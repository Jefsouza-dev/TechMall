import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { formatedPrice } from "../../services/formatedPrice";
import { CartContext } from "../../contexts/CartContext";
import IProduct from "../../interfaces/products";

const Card = (product: IProduct) => {
  const { id, cover, shortTitle, price } = product;

  const { addItemCart } = useContext(CartContext);

  const handleAddCartItem = (product: any) => {
    addItemCart(product);
  };

  return (
    <section className="w-4/5 mb-8 mx-auto flex flex-col items-center hover:border  hover:border-neutral-950 p-5 rounded-2xl bg-white">
      <Link to={`/produto/${id}`}>
        <img
          className="w-full rounded-lg mb-3 hover:scale-110 transition-all"
          src={cover}
          alt={shortTitle}
        />
        <p className="font-medium  mb-2 w-4/5 mx-auto text-center">
          {shortTitle}
        </p>
      </Link>

      <div className="flex gap-2 items-center justify-center">
        <strong className="text-zinc-700/90">
          {price ? formatedPrice(price) : null}
        </strong>
        <button
          className="bg-zinc-900 p-1 rounded hover:scale-110 transition-all"
          onClick={() => handleAddCartItem(product)}
        >
          <BsCartPlus size={20} color="#FFF" />
        </button>
      </div>
    </section>
  );
};

export default Card;
