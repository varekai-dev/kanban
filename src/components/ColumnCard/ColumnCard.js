import { Button, Card, Div } from "@vkontakte/vkui";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./ColumnCard.css";
import { deleteCard } from "../../actions";
import Context from "../App/context";

function ColumnCard({ children, id }) {
  const { removeCard } = useContext(Context);
  const deleteItem = () => {
    deleteCard(id)
      .then(() => removeCard(id))
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
