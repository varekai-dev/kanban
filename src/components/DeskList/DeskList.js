import { CardGrid } from "@vkontakte/vkui";
import React, { useEffect, useContext } from "react";
import DeskItem from "../DeskItem/DeskItem";
import PropTypes from "prop-types";
import Context from "../App/context";
import { getDesks } from "../../actions";

function DeskList() {
  const { setDesks, desks } = useContext(Context);
  useEffect(() => {
    getDesks().then(setDesks);
    // eslint-disable-next-line
  }, []);
  if (!desks.length) {
    return null;
  }
  return (
    <CardGrid>
      {desks.map(({ id, name }) => (
        <DeskItem key={id} id={id}>
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
};

export default DeskList;
