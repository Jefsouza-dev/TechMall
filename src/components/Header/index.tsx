import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "../Logo";
import { CartContext } from "../../contexts/CartContext";
import ShowAmount from "../ShowAmount";

const Header = () => {
  const { cartAmount } = useContext(CartContext);

  return (
    <header className="w-full px-1 bg-slate-200">
      <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
        <Link to="/">
          <Logo />
        </Link>

        <Link className="relative" to="/carrinho">
          <FiShoppingCart size={24} color="#121212" />

          {cartAmount > 0 && <ShowAmount cartAmount={cartAmount} />}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
