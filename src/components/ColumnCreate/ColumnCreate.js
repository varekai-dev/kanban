import React from "react";
import PropTypes from "prop-types";
import db from "../../models/firebase";
import CreateForm from "../CreateForm/CreateForm";
import "../../panels/Columns/Columns.css";
import { Div } from "@vkontakte/vkui";

function DeskCreate({ onCreate, deskId }) {
  const createColumn = (name) => {
    return db
      .collection("columns")
      .add({ name, deskId })
      .then((docRef) => docRef.get())
      .then((doc) => onCreate({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <Div className="Column">
      <CreateForm
        onSubmit={createColumn}
        placeholder="Enter column name"
        actionTitle="Create column"
      />
    </Div>
  );
}

DeskCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  deskId: PropTypes.string.isRequired,
};

export default DeskCreate;
