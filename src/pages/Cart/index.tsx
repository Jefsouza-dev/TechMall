import { useContext } from "react";
import EmptyCart from "../../components/EmptyCart";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

import { formatedPrice } from "../../services/formatedPrice";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, setCart, total, addItemCart, removeItemCart } =
    useContext(CartContext);

  const confirmPurchase = () => {
    setCart([]);
    navigate("/thanks");
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu Carrinho</h1>

      {cart.length === 0 && <EmptyCart />}

      {cart.map((item) => {
        return (
          <section
            key={item.id}
            className="flex items-center justify-between border-b-2 border-gray-300 flex-col gap-4 mb-12 sm:mb-6 sm:flex-row m-10"
          >
            <img className="w-28" src={item.cover} />

            <strong>{formatedPrice(item.price)}</strong>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => removeItemCart(item)}
                className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
              >
                -
              </button>
              {item.amount}
              <button
                onClick={() => addItemCart(item)}
                className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
              >
                +
              </button>
            </div>

            <strong className="float-right mb-2">
              SubTotal: {formatedPrice(item.total)}
            </strong>
          </section>
        );
      })}

      {cart.length > 0 && (
        <div className="flex flex-col items-center mx-10 sm:flex-row sm:justify-between ">
          <p className="font-bold mb-4">Total: {total}</p>

          <button
            className="border p-3 rounded-lg bg-slate-700 text-white hover:bg-slate-600"
            onClick={confirmPurchase}
          >
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
