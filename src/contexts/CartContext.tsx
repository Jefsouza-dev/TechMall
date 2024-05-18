import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { formatedPrice } from "../services/formatedPrice";

interface ICartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
  shortTitle: string;
  inclusionDate: Date;
}

interface IcartContext {
  cart: ICartProps[];
  setCart: Dispatch<SetStateAction<ICartProps[]>>;
  cartAmount: number;
  addItemCart: (newItem: ICartProps) => void;
  removeItemCart: (product: ICartProps) => void;
  total: string;
}

export const CartContext = createContext({} as IcartContext);

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ICartProps[]>([]);
  const [total, setTotal] = useState("");

  function addItemCart(newItem: ICartProps) {
    const existingItemIndex = cart.findIndex((item) => item.id === newItem.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].amount += 1;
      updatedCart[existingItemIndex].total += newItem.price;

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [
        ...cart,
        { ...newItem, amount: 1, total: newItem.price },
      ];

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    totalResult(cart); // Chama totalResult após a atualização do carrinho
  }

  function totalResult(items: ICartProps[]) {
    let result = items.reduce((acc, obj) => acc + obj.total, 0);
    let resultFormated = formatedPrice(result);
    setTotal(resultFormated);
  }

  function removeItemCart(product: ICartProps) {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].amount -= 1;
      updatedCart[existingItemIndex].total -= product.price;

      if (updatedCart[existingItemIndex].amount === 0) {
        updatedCart.splice(existingItemIndex, 1); // Remover o item se a quantidade for zero
      }

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    totalResult(cart); // Chama totalResult após a atualização do carrinho
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
