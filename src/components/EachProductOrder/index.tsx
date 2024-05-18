import { formatedPrice } from "../../services/formatedPrice";

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

interface IEachProductOrderProps {
  item: ICartProps;
  addItemCart: (newItem: ICartProps) => void;
  removeItemCart: (product: ICartProps) => void;
}

const EachProductOrder = ({
  item,
  removeItemCart,
  addItemCart,
}: IEachProductOrderProps) => {
  const { cover, price, amount, total } = item;

  return (
    <section className="flex items-center justify-between border-b-2 border-gray-300 flex-col gap-4 mb-12 sm:mb-6 sm:flex-row m-10">
      <img className="w-28" src={cover} alt={item.title} />

      <strong>{formatedPrice(price)}</strong>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => removeItemCart(item)}
          className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
        >
          -
        </button>
        {amount}
        <button
          onClick={() => addItemCart(item)}
          className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
        >
          +
        </button>
      </div>

      <strong className="float-right mb-2">
        SubTotal: {formatedPrice(total)}
      </strong>
    </section>
  );
};

export default EachProductOrder;
