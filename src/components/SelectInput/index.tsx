interface ISelectInputProps {
  handleSortChange: (option: string) => void;
}

const SelectInput = ({ handleSortChange }: ISelectInputProps) => {
  return (
    <div className="flex m-auto justify-center items-center gap-6 mt-9 ">
      <span>Ordenar por: </span>
      <select
        className="border p-2 rounded-lg outline-none"
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option> --------------- </option>
        <option value="price">Preço</option>
        <option value="inclusionDate">Data de Inclusão</option>
      </select>
    </div>
  );
};

export default SelectInput;
