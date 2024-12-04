import { useState, Fragment } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMenuLinks } from "../../hooks";
import { cx } from "../../utils";
import { Form } from "../Form";
import { MoveIcon } from "../Icons";
import { NestedList } from "../NestedList";
import { MenuItemProps } from "./types";
import { Buttons } from "./Buttons";

export const MenuItem = ({
  id,
  label,
  url,
  links,
  isNested,
  isLastItem,
  handleRemoveLink,
  handleEditLink,
}: MenuItemProps) => {
  const [showForm, setShowForm] = useState<"basic" | "edit" | "">("");

  const {
    links: menuLinks,
    handleAddLink,
    handleDragEnd,
    handleEditLink: handleEditLinkNested,
    handleRemoveLink: handleRemoveLinkNested,
  } = useMenuLinks(links);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
    });

  const style = {
    transform: CSS.Transform.toString(transform)?.replace(
      /scaleY\(([^)]+)\)/,
      "scale(1)"
    ),
    transition,
  };

  return (
    <Fragment>
      <li ref={setNodeRef} style={style}>
        <div
          className={cx(
            "flex items-center py-4 px-6 border-b border-border-secondary bg-white",
            isNested && "border-l border-border-secondary ",
            ((isNested && menuLinks.length > 0) || isLastItem) &&
              "rounded-bl-lg"
          )}
        >
          <button {...listeners} {...attributes}>
            <MoveIcon />
          </button>
          <div className="ml-1">
            <h2 className="text-text-primary text-sm font-semibold">{label}</h2>
            {url ? (
              <p className="mt-1.5 text-text-tertiary text-sm">{url}</p>
            ) : null}
          </div>
          <Buttons
            handleDelete={() => handleRemoveLink(id)}
            handleEdit={() => setShowForm("edit")}
            handleAdd={() => setShowForm("basic")}
          />
        </div>
        {menuLinks.length > 0 ? (
          <div className="bg-bg-secondary">
            <NestedList
              links={menuLinks}
              handleDragEnd={handleDragEnd}
              handleEditLink={handleEditLinkNested}
              handleRemoveLink={handleRemoveLinkNested}
            />
          </div>
        ) : null}
      </li>
      {showForm ? (
        <div
          className={cx(
            "py-5 bg-bg-secondary",
            !isLastItem && "border-b border-border-secondary"
          )}
        >
          <Form
            nested
            handleAddLink={handleAddLink}
            handleClose={() => setShowForm("")}
            editable={
              showForm === "edit"
                ? {
                    handleEditLink,
                    data: { id, label, url, links: menuLinks },
                  }
                : undefined
            }
          />
        </div>
      ) : null}
    </Fragment>
  );
};
