import { useState, useCallback } from "react";
import { DragEndEvent } from "@dnd-kit/core";

export type MenuItemType = {
  id: string;
  label: string;
  url?: string;
  links: MenuItemType[];
};

export const useMenuLinks = (data: MenuItemType[]) => {
  const [links, setLinks] = useState(data);

  const handleRemoveLink = useCallback((id: string) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
  }, []);

  const handleAddLink = useCallback((link: MenuItemType) => {
    setLinks((prevLinks) => [...prevLinks, link]);
  }, []);

  const handleEditLink = useCallback((link: MenuItemType) => {
    setLinks((prevLinks) =>
      prevLinks.map((prevLink) =>
        prevLink.id === link.id ? { ...prevLink, ...link } : prevLink
      )
    );
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id === over.id) return;

    setLinks((links) => {
      const oldIndex = links.findIndex((link) => link.id === active.id);
      const newIndex = links.findIndex((link) => link.id === over.id);

      const updatedLinks = [...links];
      updatedLinks.splice(oldIndex, 1);
      updatedLinks.splice(newIndex, 0, links[oldIndex]);

      return updatedLinks;
    });
  }, []);

  return {
    links,
    handleRemoveLink,
    handleAddLink,
    handleEditLink,
    handleDragEnd,
  };
};
