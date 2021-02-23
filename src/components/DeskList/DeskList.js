import { CardGrid } from "@vkontakte/vkui";
import React, { useEffect } from "react";
import DeskItem from "../DeskItem/DeskItem";
import PropTypes from "prop-types";

import { getDesks } from "../../actions";

function DeskList({ desks, onDelete, onLoadDesks, onDeskClick }) {
  useEffect(() => {
    getDesks().then(onLoadDesks);
    // eslint-disable-next-line
  }, []);
  if (!desks.length) {
    return null;
  }
  return (
    <CardGrid>
      {desks.map(({ id, name }) => (
        <DeskItem
          onClick={() => onDeskClick(id)}
          onDelete={onDelete}
          key={id}
          id={id}
        >
          {" "}
          {name}
        </DeskItem>
      ))}
    </CardGrid>
  );
}

DeskList.propTypes = {
  desks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
  onLoadDesks: PropTypes.func.isRequired,
  onDeskClick: PropTypes.func.isRequired,
};

export default DeskList;
