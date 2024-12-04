import { useState } from "react";
import {
  DndContext,
  closestCorners,
  useDroppable,
  TouchSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ListProps } from "./types";
import { Form } from "../Form";
import { MenuItem } from "../MenuItem";

export const List = ({
  links,
  handleRemoveLink,
  handleAddLink,
  handleEditLink,
  handleDragEnd,
}: ListProps) => {
  const [showForm, setShowForm] = useState(false);

  const { setNodeRef } = useDroppable({ id: "links" });

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={links} strategy={verticalListSortingStrategy}>
        <ul
          ref={setNodeRef}
          className="my-8 mx-6 border-border-primary border rounded-lg overflow-hidden"
        >
          {links.map((link) => (
            <MenuItem
              key={link.id}
              {...link}
              handleEditLink={handleEditLink}
              handleRemoveLink={handleRemoveLink}
            />
          ))}
          {showForm ? (
            <div className="py-4 border-b border-border-secondary bg-bg-secondary">
              <Form
                basic
                handleClose={() => setShowForm(false)}
                handleAddLink={handleAddLink}
              />
            </div>
          ) : null}
          <button
            onClick={() => setShowForm(true)}
            className="my-5 mx-6 py-[9px] px-3.5 border border-border-primary rounded-lg text-sm text-text-secondary font-semibold bg-white"
          >
            Dodaj pozycję menu
          </button>
        </ul>
      </SortableContext>
    </DndContext>
  );
};
