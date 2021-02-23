import React from "react";
import PropTypes from "prop-types";
import CreateForm from "../CreateForm/CreateForm";
import { createCard } from "../../actions";

function CardCreate({ onCreate, columnId }) {
  const createItem = (name) => {
    createCard(name, columnId)
      .then((doc) => onCreate({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <CreateForm
      onSubmit={createItem}
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
