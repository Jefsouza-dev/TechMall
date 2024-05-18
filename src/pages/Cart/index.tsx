import { useContext, useEffect } from "react";
import EmptyCart from "../../components/EmptyCart";
import EachProductOrder from "../../components/EachProductOrder";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, setCart, total, addItemCart, removeItemCart } =
    useContext(CartContext);

  const confirmPurchase = () => {
    setCart([]);
    navigate("/thanks");
  };

  useEffect(() => {
    const cartItem = localStorage.getItem("cart");
    if (cartItem) {
      setCart(JSON.parse(cartItem));
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu Carrinho</h1>

      {cart.length === 0 && <EmptyCart />}

      {cart.map((item) => (
        <EachProductOrder
          key={item.id}
          item={item}
          removeItemCart={removeItemCart}
          addItemCart={addItemCart}
        />
      ))}

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
