import React, { useContext } from "react";
import CreateForm from "../CreateForm/CreateForm";
import "../../panels/Columns/Columns.css";
import { Div } from "@vkontakte/vkui";
import { createColumn } from "../../actions";
import Context from "../App/context";

function DeskCreate() {
  const { addColumn, activeDesk } = useContext(Context);
  const createItem = (name) => {
    return createColumn(name, activeDesk.id)
      .then((doc) => addColumn({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <Div className="Column">
      <CreateForm
        onSubmit={createItem}
        placeholder="Enter column name"
        actionTitle="Create column"
      />
    </Div>
  );
}

export default DeskCreate;
