import React from "react";
import PropTypes from "prop-types";
import CreateForm from "../CreateForm/CreateForm";

import { createDesk } from "../../actions";

function DeskCreate({ onCreate }) {
  const deskCreate = (name) => {
    return createDesk(name)
      .then((doc) => onCreate({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <CreateForm
      onSubmit={deskCreate}
      placeholder="Enter desk name"
      actionTitle="Create desk"
    />
  );
}

DeskCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default DeskCreate;
