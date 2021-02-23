import React from "react";
import { Div, Card, Header, Button } from "@vkontakte/vkui";
import "./Column.css";
import PropTypes from "prop-types";
import Cards from "../Cards/Cards";
import { deleteColumn } from "../../actions";

function Column({ children, onDelete, id }) {
  const deleteItem = () => {
    deleteColumn(id).then(onDelete(id)).catch(console.error);
  };
  return (
    <Div className="Column">
      <div className="Column__header">
        <Header>{children}</Header>
        <Button mode="destructive" onClick={deleteItem}>
          Delete
        </Button>
      </div>
      <Card className="Column__wrapper">
        <Cards columnId={id} />
      </Card>
    </Div>
  );
}

Column.propTypes = {
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Column;
