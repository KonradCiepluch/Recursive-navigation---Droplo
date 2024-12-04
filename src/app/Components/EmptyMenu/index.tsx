import { AddIcon } from "../Icons";

type EmptyMenuProps = {
  handleOpen: () => void;
};

export const EmptyMenu = ({ handleOpen }: EmptyMenuProps) => {
  return (
    <div className="flex flex-col items-center my-7.5 mx-6 py-6 px-4 rounded-lg border border-border-secondary bg-bg-secondary">
      <h1 className="mb-1 text-text-primary text-base font-semibold ">
        Menu jest puste
      </h1>
      <p className="text-sm text-text-tertiary">
        W tym menu nie ma jeszcze żadnych linków.
      </p>
      <button
        onClick={handleOpen}
        className="flex items-center rounded-lg mt-[22px] py-2.5 px-3.5 text-sm text-white font-semibold bg-button-primary-bg  "
      >
        <AddIcon />
        <span className="ml-1.5 -mt-0.5">Dodaj pozycję menu</span>
      </button>
    </div>
  );
};
