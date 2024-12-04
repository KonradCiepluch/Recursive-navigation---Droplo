import { object, string } from "yup";

export const schema = object({
  label: string()
    .min(3, { message: "Label powinien składać się przynajmniej z 3 znaków" })
    .required(),
  url: string().url({ message: "Niepoprawny format URL" }),
});
