import React from "react";

type ButtonsProps = {
  handleDelete: () => void;
  handleEdit: () => void;
  handleAdd: () => void;
};

const buttonBasicClasses =
  "py-[9px] px-[16px] text-text-secondary text-sm font-semibold";

export const Buttons = ({
  handleAdd,
  handleDelete,
  handleEdit,
}: ButtonsProps) => {
  return (
    <div className="ml-auto border border-border-primary rounded-lg">
      <button
        onClick={handleDelete}
        className={`border-r ${buttonBasicClasses}`}
      >
        Usuń
      </button>
      <button onClick={handleEdit} className={`border-r ${buttonBasicClasses}`}>
        Edytuj
      </button>
      <button onClick={handleAdd} className={buttonBasicClasses}>
        Dodaj pozycję menu
      </button>
    </div>
  );
};
