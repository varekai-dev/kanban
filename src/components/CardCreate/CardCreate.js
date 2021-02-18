import React from "react";
import PropTypes from "prop-types";
import db from "../../firebase";
import CreateForm from "../CreateForm/CreateForm";

function CardCreate({ onCreate, columnId }) {
  const createCard = (name) => {
    return db
      .collection("cards")
      .add({ name, columnId })
      .then((docRef) => docRef.get())
      .then((doc) => onCreate({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <CreateForm
      onSubmit={createCard}
      placeholder="Enter card name"
      actionTitle="Create card"
    />
  );
}

CardCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
