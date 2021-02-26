import { CardGrid } from "@vkontakte/vkui";
import React, { useEffect, useContext } from "react";
import DeskItem from "../DeskItem/DeskItem";
import PropTypes from "prop-types";
import Context from "../App/context";
import { getDesks } from "../../actions";

function DeskList() {
  const { onChangePanel, setDesks, desks } = useContext(Context);
  const state = useContext(Context);
  console.log(state);
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
        <DeskItem onClick={() => onChangePanel(id)} key={id} id={id}>
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
