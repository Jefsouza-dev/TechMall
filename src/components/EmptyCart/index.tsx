import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-medium"> SEU CARRINHO ESTÁ VAZIO! </p>
      <Link
        to="/"
        className="bg-slate-600 my-3 p-2 px-3 text-white font-medium rounded"
      >
        Ver Produtos
      </Link>
    </div>
  );
};

export default EmptyCart;
