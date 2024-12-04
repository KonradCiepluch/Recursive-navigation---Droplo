import { MenuItemType } from "../../hooks";
import { DragEndEvent } from "@dnd-kit/core";

export type ListProps = {
  links: MenuItemType[];
  handleRemoveLink: (id: string) => void;
  handleAddLink: (data: MenuItemType) => void;
  handleEditLink: (data: MenuItemType) => void;
  handleDragEnd: (event: DragEndEvent) => void;
};
