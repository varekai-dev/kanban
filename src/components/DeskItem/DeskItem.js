import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button, Card, Div } from "@vkontakte/vkui";
import "./DeskItem.css";
import { deleteDesk } from "../../actions";
import Context from "../App/context";

const DeskItem = ({ children, id }) => {
  const { removeDesk, goToColumns } = useContext(Context);
  const goToColumnPanel = () => goToColumns(id);
  const deleteItem = (e) => {
    e.stopPropagation();
    deleteDesk(id)
      .then(() => removeDesk(id))
      .catch(console.error);
  };
  return (
    <Card size="l" onClick={goToColumnPanel}>
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default DeskItem;
