import { MenuItemType } from "../../hooks";

export type MenuItemProps = MenuItemType & {
  isLastItem?: boolean;
  isNested?: boolean;
  handleRemoveLink: (id: string) => void;
  handleEditLink: (data: MenuItemType) => void;
};
