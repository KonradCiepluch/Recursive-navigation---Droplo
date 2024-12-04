import { MenuItemType } from "../../hooks";

export type FormProps = {
  editable?: {
    handleEditLink: (data: MenuItemType) => void;
    data: MenuItemType;
  };
  basic?: boolean;
  nested?: boolean;
  handleClose: () => void;
  handleAddLink: (data: MenuItemType) => void;
};

export type ErrorsType = {
  label?: {
    message: { message: string };
  };
  url?: {
    message: { message: string };
  };
};
