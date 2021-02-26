import React, { useContext } from "react";
import CreateForm from "../CreateForm/CreateForm";
import Context from "../App/context";

import { createDesk } from "../../actions";

function DeskCreate() {
  const { addDesk } = useContext(Context);
  const createItem = (name) => {
    return createDesk(name)
      .then((doc) => addDesk({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Enter desk name"
      actionTitle="Create desk"
    />
  );
}

export default DeskCreate;
