import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <div className="lg:bg-white p-8 lg:shadow-lg rounded-3xl flex justify-center items-center flex-col -mt-28 ">
        <h1 className="text-2xl font-bold mb-4">Obrigado pela sua compra!</h1>
        <p className="text-gray-700 mb-6">
          Agradecemos por escolher nossos produtos. Esperamos que tenha uma
          ótima experiência com sua compra.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <span className="mr-2">Continuar comprando</span>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
