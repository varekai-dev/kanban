import { CardGrid } from "@vkontakte/vkui";
import React, { useEffect } from "react";
import DeskItem from "../DeskItem/DeskItem";
import PropTypes from "prop-types";
import db from "../../firebase";

function DeskList({ desks, onDelete, onLoadDesks, onDeskClick }) {
  useEffect(() => {
    db.collection("desks")
      .get()
      .then((querySnapshot) => {
        const desks = [];
        querySnapshot.forEach((doc) => {
          desks.push({
            id: doc.id,
            name: doc.data().name,
          });
        });
        onLoadDesks(desks);
      });
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
