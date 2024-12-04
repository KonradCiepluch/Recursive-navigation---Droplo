import {
  DndContext,
  closestCorners,
  DragEndEvent,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { MenuItemType } from "../../hooks";
import { MenuItem } from "../MenuItem";

type NestedListProps = {
  links: MenuItemType[];
  handleDragEnd: (event: DragEndEvent) => void;
  handleRemoveLink: (id: string) => void;
  handleEditLink: (data: MenuItemType) => void;
};

export const NestedList = ({
  links,
  handleEditLink,
  handleRemoveLink,
  handleDragEnd,
}: NestedListProps) => {
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={links} strategy={verticalListSortingStrategy}>
        <ul style={{ marginLeft: 64 }}>
          {links.map((link, idx, arr) => (
            <MenuItem
              key={link.id}
              {...link}
              handleRemoveLink={handleRemoveLink}
              handleEditLink={handleEditLink}
              isNested
              isLastItem={idx === arr.length - 1}
            />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
};
