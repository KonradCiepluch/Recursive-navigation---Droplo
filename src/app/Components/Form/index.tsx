import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./resolver";
import { generateUniqueId, cx } from "../../utils";
import { TrashIcon, SearchIcon } from "../Icons";
import { FormProps, ErrorsType } from "./types";

const inputClasses =
  "w-full py-[7px] px-3 rounded-lg border border-border-primary text-text-primary placeholder:text-text-placeholder";

const labelClasses = "block mb-1.5 text-text-secondary text-sm font-medium";

const buttonClasses = "py-[9px] px-3.5 rounded-lg border text-sm font-semibold";

export const Form = ({
  editable,
  basic,
  nested,
  handleClose,
  handleAddLink,
}: FormProps) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  // formState.errors has incorrect type provided by react-hook-form
  const errors = formState.errors as ErrorsType;

  const handleSubmitForm = (data: FieldValues) => {
    if (editable) {
      editable.handleEditLink({ ...editable.data, ...data });
      handleClose();
      return;
    }
    const id = generateUniqueId();
    const link = { id, label: data.label, url: data.url, links: [] };
    handleAddLink(link);
    handleClose();
  };

  return (
    <form
      className={cx(
        "flex items-start py-[19px] px-6 my-8 ml-4 mr-6 border border-border-primary rounded-lg bg-white",
        basic && "!my-0 mx-6",
        nested && "!my-0 ml-16 mr-6"
      )}
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div className="grow mr-4">
        <div className="mb-2">
          <label className={labelClasses}>Nazwa</label>
          <input
            {...register("label")}
            placeholder="Np. Promocje"
            className={inputClasses}
            defaultValue={editable?.data.label}
          />
          {errors?.label ? (
            <p className="text-red-600 text-sm mt-1">
              {errors.label?.message.message}
            </p>
          ) : null}
        </div>
        <div className="relative">
          <label className={labelClasses}>Link</label>
          <input
            {...register("url")}
            placeholder="Wklej lub wyszukaj"
            className={`pl-10 ${inputClasses}`}
            defaultValue={editable?.data.url}
          />
          {errors?.url ? (
            <p className="text-red-600 text-sm mt-1">
              {errors.url?.message.message}
            </p>
          ) : null}
          <div className="absolute left-3 top-9">
            <SearchIcon />
          </div>
        </div>
        <div className="mt-[20px]">
          <button
            type="button"
            onClick={handleClose}
            className={`mr-2 border-border-primary text-text-secondary ${buttonClasses}`}
          >
            Anuluj
          </button>
          <button
            type="submit"
            className={`border-button-secondary-color-border text-button-secondary-color-fg ${buttonClasses}`}
          >
            {editable ? "Zapisz" : "Dodaj"}
          </button>
        </div>
      </div>
      <button type="button" onClick={handleClose} className="shrink-0 p-2.5">
        <TrashIcon />
      </button>
    </form>
  );
};
