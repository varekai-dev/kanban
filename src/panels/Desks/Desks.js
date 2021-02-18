import { PanelHeaderSimple } from "@vkontakte/vkui";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import DeskList from "../../components/DeskList/DeskList";
import DeskCreate from "../../components/DeskCreate/DeskCreate";

function Desks({ onChangePanel, setDesks, addDesk, removeDesk, desks }) {
  return (
    <Fragment>
      <PanelHeaderSimple>My desks</PanelHeaderSimple>
      <DeskCreate onCreate={addDesk} />
      <DeskList
        onLoadDesks={setDesks}
        desks={desks}
        onDelete={removeDesk}
        onDeskClick={onChangePanel}
      />
    </Fragment>
  );
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Desks;
