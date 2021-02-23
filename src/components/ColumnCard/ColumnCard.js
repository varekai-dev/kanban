import { Button, Card, Div } from "@vkontakte/vkui";
import React from "react";
import PropTypes from "prop-types";
import "./ColumnCard.css";
import { deleteCard } from "../../actions";

function ColumnCard({ children, id, onDelete }) {
  const deleteItem = () => {
    deleteCard(id)
      .then(() => onDelete(id))
      .catch(console.error);
  };
  return (
    <Card size="l">
      <Div className="ColumnCard__wrapper">
        {children}
        <Button mode="destructive" onClick={deleteItem}>
          Delete
        </Button>
      </Div>
    </Card>
  );
}

ColumnCard.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ColumnCard;
