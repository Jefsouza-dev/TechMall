import { useParams } from "react-router-dom";
import IProduct from "../../interfaces/products";

import DetailsProductArea from "../../components/DetailsProductArea";

import products from "../../services/products";

const DetailsProduct = () => {
  const { id } = useParams();
  const productId = id ? parseInt(id) : "";

  const product = products.find(
    (product: IProduct) => product.id === productId
  );

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto mt-28">
        {product && <DetailsProductArea {...product} />}
      </main>
    </div>
  );
};

export default DetailsProduct;
