import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Div } from "@vkontakte/vkui";
import "./DeskItem.css";
import db from "../../models/firebase";
import { deleteDesk } from "../../actions";

const DeskItem = ({ children, id, onDelete, onClick }) => {
  const deleteItem = () => {
    deleteDesk(id)
      .then(() => onDelete(id))
      .catch(console.error);
  };
  return (
    <Card size="l" onClick={onClick}>
      <Div className="DeskItem__content">
        {children}
        <Button onClick={deleteItem} mode="destructive">
          Delete
        </Button>
      </Div>
    </Card>
  );
};

DeskItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default DeskItem;
