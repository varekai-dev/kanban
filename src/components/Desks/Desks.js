import { PanelHeaderSimple } from "@vkontakte/vkui";
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import DeskList from "../../components/DeskList/DeskList";
import DeskCreate from "../../components/DeskCreate/DeskCreate";

function Desks({ onChangePanel }) {
  const [desks, setDesks] = useState([]);
  const addDesk = (desk) => setDesks([...desks, desk]);
  const removeDesk = (id) => {
    const result = desks.filter((item) => item.id !== id);
    setDesks(result);
  };

  return (
    <Fragment>
      <PanelHeaderSimple>My desks</PanelHeaderSimple>
      <DeskCreate onCreate={addDesk} />
      <DeskList onLoadDesks={setDesks} desks={desks} onDelete={removeDesk} />

      {/* <div>Desk Panel</div>
			<Button size="l" onClick={onChangePanel}>
				Go to columns
			</Button> */}
    </Fragment>
  );
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Desks;
