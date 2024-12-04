"use client";
import { useState, Fragment } from "react";
import { List } from "./Components/List";
import { Form } from "./Components/Form";
import { EmptyMenu } from "./Components/EmptyMenu";
import { useMenuLinks } from "./hooks";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const {
    links,
    handleRemoveLink,
    handleAddLink,
    handleEditLink,
    handleDragEnd,
  } = useMenuLinks([]);

  return (
    <Fragment>
      {links.length === 0 && !showForm ? (
        <EmptyMenu handleOpen={() => setShowForm(true)} />
      ) : null}
      {showForm ? (
        <Form
          handleAddLink={handleAddLink}
          handleClose={() => setShowForm(false)}
        />
      ) : null}
      {links.length > 0 ? (
        <List
          links={links}
          handleDragEnd={handleDragEnd}
          handleRemoveLink={handleRemoveLink}
          handleAddLink={handleAddLink}
          handleEditLink={handleEditLink}
        />
      ) : null}
    </Fragment>
  );
}
